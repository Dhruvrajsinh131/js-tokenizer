const SPECIAL_TOKENS = {
  PAD: "<PAD>",
  UNK: "<UNK>",
  BOS: "<BOS>",
  EOS: "<EOS>",
};

class Tokenizer {
  constructor() {
    this.vocab = {};
    this.reverseVocab = {};
    this.nextId = 0;
    this._addSpecialTokens();
  }

  _addSpecialTokens() {
    for (let token of Object.values(SPECIAL_TOKENS)) {
      this._addToken(token);
    }
  }

  _addToken(token) {
    if (!(token in this.vocab)) {
      this.vocab[token] = this.nextId;
      this.reverseVocab[this.nextId] = token;
      this.nextId++;
    }
  }

  learnVocabFromText(text) {
    const tokens = text.split(/\s+/);
    tokens.forEach((t) => this._addToken(t));
  }

  encode(text) {
    const tokens = text.split(/\s+/);
    return [
      this.vocab[SPECIAL_TOKENS.BOS],
      ...tokens.map((t) =>
        this.vocab[t] !== undefined
          ? this.vocab[t]
          : this.vocab[SPECIAL_TOKENS.UNK]
      ),
      this.vocab[SPECIAL_TOKENS.EOS],
    ];
  }

  decode(tokenIds) {
    return tokenIds
      .map((id) => this.reverseVocab[id] || SPECIAL_TOKENS.UNK)
      .filter((t) => !Object.values(SPECIAL_TOKENS).includes(t))
      .join(" ");
  }
}

const tokenizer = new Tokenizer();

tokenizer.learnVocabFromText("hello world this is a test tokenizer");

const encoded = tokenizer.encode("hello world from dhruv");
console.log("Encoded:", encoded);

const decoded = tokenizer.decode(encoded);
console.log("Decoded:", decoded);

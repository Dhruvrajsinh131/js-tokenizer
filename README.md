# JS Tokenizer

A simple JavaScript tokenizer implementation that converts text into token IDs and back to text.

## Features

- **Vocabulary Learning**: Build vocabulary from training text
- **Special Tokens**: Supports PAD, UNK (unknown), BOS (beginning of sequence), and EOS (end of sequence) tokens
- **Encoding**: Convert text to token IDs with proper sequence markers
- **Decoding**: Convert token IDs back to readable text
- **Unknown Token Handling**: Gracefully handles out-of-vocabulary words

## Usage

```javascript
const tokenizer = new Tokenizer();

// Learn vocabulary from training text
tokenizer.learnVocabFromText("hello world this is a test tokenizer");

// Encode text to token IDs
const encoded = tokenizer.encode("hello world from dhruv");
console.log("Encoded:", encoded);

// Decode token IDs back to text
const decoded = tokenizer.decode(encoded);
console.log("Decoded:", decoded);
```

## Special Tokens

The tokenizer includes the following special tokens:

- `<PAD>`: Padding token for sequence alignment
- `<UNK>`: Unknown token for out-of-vocabulary words
- `<BOS>`: Beginning of sequence marker
- `<EOS>`: End of sequence marker

## API

### Constructor
- `new Tokenizer()`: Creates a new tokenizer instance with special tokens pre-loaded

### Methods
- `learnVocabFromText(text)`: Adds all unique tokens from the input text to the vocabulary
- `encode(text)`: Converts text string to array of token IDs with BOS/EOS markers
- `decode(tokenIds)`: Converts array of token IDs back to text string (filters out special tokens)

## Running the Example

```bash
node index.js
```

This will demonstrate the tokenizer by:
1. Learning vocabulary from sample text
2. Encoding a test sentence
3. Decoding the token IDs back to text

## License

MIT License

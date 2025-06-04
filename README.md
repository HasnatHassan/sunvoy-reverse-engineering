# SunVoy Reverse Engineering

A TypeScript-based tool for interacting with the SunVoy API, designed to fetch user data and authentication information.

## Features

- Authentication handling with nonce-based login
- User data retrieval
- Current user information fetching
- Automatic data export to JSON format

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd sunvoy-reverse-engineering
```

2. Install dependencies:
```bash
npm install
```

## Usage

To run the application:

```bash
npm start
```

This will:
1. Authenticate with the SunVoy API
2. Fetch user data
3. Retrieve current user information
4. Save the results to `users.json` in the project root

## Project Structure

```
sunvoy-reverse-engineering/
├── src/
│   ├── api/
│   │   ├── auth.ts    # Authentication related functions
│   │   └── user.ts    # User data fetching functions
│   └── index.ts       # Main application entry point
├── users.json         # Output file for user data
├── package.json       # Project dependencies and scripts
└── tsconfig.json     # TypeScript configuration
```

## Dependencies

- axios: HTTP client for API requests
- cheerio: HTML parsing and manipulation
- qs: Query string parsing and stringifying
- TypeScript: Development language
- ts-node: TypeScript execution environment

## Development

The project is written in TypeScript and uses modern ES6+ features. To modify the code:

1. Make changes in the `src` directory
2. The main logic is split between authentication (`api/auth.ts`) and user operations (`api/user.ts`)
3. Run the application using `npm start` to test changes

## Output

The application generates a `users.json` file containing:
- List of users
- Current user information

## License

ISC

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 
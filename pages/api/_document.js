import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		// Returns an object like: { html, head, errorHtml, chunks, styles }
		return renderPage()
	}

	render() {
		return (
			<html>
				<Head>
					<title>My page testeeee</title>
					<meta charset='utf-8' />
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1'
					/>
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}

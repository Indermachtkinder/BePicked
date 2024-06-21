import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BePicked</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }
        nav {
            display: flex;
            justify-content: center;
            background-color: #444;
            padding: 10px 0;
        }
        nav a {
            color: #fff;
            margin: 0 15px;
            text-decoration: none;
        }
        nav a:hover {
            text-decoration: underline;
        }
        main {
            padding: 20px;
        }
        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Dataprivacy BePicked</h1>
    </header>
    <nav>
        <a href="#home">Home</a>
    </nav>
    <main>
        <h1>Datenschutzerklärung</h1>

    <section>
        <h2>Datenschutz und Datensicherheit</h2>
        <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Unser Programm wurde entwickelt, um die Privatsphäre unserer Benutzer zu respektieren und zu schützen. Im Folgenden erklären wir, wie unser Programm funktioniert und welche Daten verarbeitet werden.</p>
    </section>

    <section>
        <h2>Keine Erhebung personenbezogener Daten</h2>
        <p>Unser Programm erhebt, speichert oder verarbeitet keinerlei personenbezogene Daten. Dies bedeutet, dass keine Informationen wie Namen, Adressen, Telefonnummern, E-Mail-Adressen oder andere persönliche Identifikationsmerkmale gesammelt werden. Die Nutzung unseres Programms erfolgt vollständig anonym.</p>
    </section>

    <section>
        <h2>Art der Datenverarbeitung</h2>
        <p>Unser Programm arbeitet ausschließlich mit anonymisierten Daten, die für die Funktionalität des Programms notwendig sind. Diese Daten können allgemeine Informationen wie technische Parameter oder Nutzungsstatistiken umfassen, die jedoch keine Rückschlüsse auf die Identität des Nutzers zulassen.</p>
    </section>

    <section>
        <h2>Datensicherheit</h2>
        <p>Wir setzen geeignete technische und organisatorische Maßnahmen ein, um die Sicherheit der verarbeiteten Daten zu gewährleisten und diese vor unbefugtem Zugriff, Verlust oder Manipulation zu schützen. Dies umfasst moderne Verschlüsselungstechniken und regelmäßige Sicherheitsüberprüfungen.</p>
    </section>

    <section>
        <h2>Keine Weitergabe an Dritte</h2>
        <p>Da unser Programm keine personenbezogenen Daten erhebt, erfolgt auch keine Weitergabe solcher Daten an Dritte. Alle gesammelten anonymen Daten werden ausschließlich intern zur Verbesserung und Weiterentwicklung des Programms verwendet.</p>
    </section>

    <section>
        <h2>Änderungen dieser Datenschutzerklärung</h2>
        <p>Wir behalten uns das Recht vor, diese Datenschutzerklärung bei Bedarf anzupassen, um aktuellen rechtlichen Anforderungen zu entsprechen oder Änderungen an unserem Programm umzusetzen. Die jeweils aktuelle Version der Datenschutzerklärung ist jederzeit innerhalb des Programms einsehbar.</p>
    </section>

    <section>
        <h2>Kontakt</h2>
        <p>Bei Fragen oder Anliegen zum Datenschutz können Sie uns jederzeit unter folgender E-Mail-Adresse kontaktieren: [Ihre E-Mail-Adresse].</p>
    </section>

    <h1>Privacy Policy</h1>

    <section>
        <h2>Data Protection and Security</h2>
        <p>We take the protection of your personal data very seriously. Our program is designed to respect and protect the privacy of our users. Below, we explain how our program operates and what data is processed.</p>
    </section>

    <section>
        <h2>No Collection of Personal Data</h2>
        <p>Our program does not collect, store, or process any personal data. This means that no information such as names, addresses, phone numbers, email addresses, or other personal identification details are gathered. The use of our program is entirely anonymous.</p>
    </section>

    <section>
        <h2>Type of Data Processing</h2>
        <p>Our program exclusively works with anonymized data necessary for its functionality. This data may include general information such as technical parameters or usage statistics, which do not allow any conclusions to be drawn about the identity of the user.</p>
    </section>

    <section>
        <h2>Data Security</h2>
        <p>We employ appropriate technical and organizational measures to ensure the security of the processed data and to protect it from unauthorized access, loss, or manipulation. This includes modern encryption techniques and regular security audits.</p>
    </section>

    <section>
        <h2>No Disclosure to Third Parties</h2>
        <p>Since our program does not collect personal data, there is no disclosure of such data to third parties. All collected anonymous data is used solely internally to improve and further develop the program.</p>
    </section>

    <section>
        <h2>Changes to this Privacy Policy</h2>
        <p>We reserve the right to adapt this privacy policy as necessary to comply with current legal requirements or to implement changes in our program. The current version of the privacy policy is always available within the program.</p>
    </section>

    <section>
        <h2>Contact</h2>
        <p>If you have any questions or concerns about data protection, you can contact us at any time via the following email address: [Your Email Address].</p>
    </section>
    </main>
    <footer>
        <p>&copy; 2024 BePicked. All rights reserved.</p>
    </footer>
</body>
</html>
  )
}

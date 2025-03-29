const fs = require('fs');
const yargs = require('yargs');

// Configura la versión de Yargs
yargs.version('1.1.0');

// Comando para agregar una nota
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Adding a new note!');
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);

        const note = {
            title: argv.title,
            body: argv.body
        };

        // Guarda la nota en un archivo
        fs.appendFileSync('notes.json', JSON.stringify(note) + '\n');
    }
});

// Para procesar los argumentos de línea de comandos
yargs.parse();
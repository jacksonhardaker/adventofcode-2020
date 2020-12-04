const __dirname = new URL(".", import.meta.url).pathname;
const [name] = Deno.args;

if (!name) {
  throw new Error("Must supply an argument");
}

// Make directory
Deno.mkdirSync(`${__dirname}../${name}`);

// Duplicate template files
for (const dirEntry of Deno.readDirSync(`${__dirname}/files`)) {
  const contents = Deno.readTextFileSync(`${__dirname}/files/${dirEntry.name}`);

  Deno.writeTextFileSync(
    `${__dirname}../${name}/${dirEntry.name.replace(/.tmp$/, "")}`,
    contents,
  );
}

// Add package.json script
Deno.readTextFile(`${__dirname}../package.json`).then(data => {
  const pkg = JSON.parse(data);
  pkg.scripts[name.replace(/-/g, '')] = `deno run --allow-read ${name}/index.ts`;
  Deno.writeTextFileSync(`${__dirname}../package.json`, JSON.stringify(pkg, null, 2));
})


export {};

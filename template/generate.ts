const __dirname = new URL(".", import.meta.url).pathname;
const [name] = Deno.args;

if (!name) {
  throw new Error("Must supply an argument");
}

Deno.mkdirSync(`${__dirname}../${name}`);

for (const dirEntry of Deno.readDirSync(`${__dirname}/files`)) {
  const contents = Deno.readTextFileSync(`${__dirname}/files/${dirEntry.name}`);

  Deno.writeTextFileSync(
    `${__dirname}../${name}/${dirEntry.name.replace(/.tmp$/, "")}`,
    contents,
  );
}

export {};

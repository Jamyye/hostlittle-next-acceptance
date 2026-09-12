import {spawn} from 'node:child_process';
const child=spawn(process.execPath,['./node_modules/next/dist/bin/next','start'],{stdio:'inherit',env:process.env});
for(const signal of ['SIGTERM','SIGINT'])process.on(signal,()=>child.kill(signal));
child.on('error',()=>process.exit(1));
child.on('exit',code=>process.exit(code??1));

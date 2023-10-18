
import { spawn } from 'child_process';

const stressPath = process.env.STRESS_PATH || '/usr/bin/stress'

export default function executeStress(timeSeconds: number = 10): Promise<Boolean> {

  const params = [
    '--cpu',      '8',
    '--io',       '4',
    '--vm',       '2',
    '--vm-bytes', '128M',
    '--timeout',  `${timeSeconds}s`,
    ];

  return new Promise((resolve, reject) => {
      const child = spawn(stressPath, params);
      console.log(`⚠️⚠️⚠️⚠️⚠️⚠️   Starting stress   ⚠️⚠️⚠️⚠️⚠️⚠️`);

      const timeoutId = setTimeout(() => {
        console.error('>> too many time, killing the process child');
        child.stdin.end();
        child.kill();
      }, 300000); // 300 seconds as max


      child.stdout.on('data', data => {
        console.log(`>> stdout: ${data}`);
      });

      child.stderr.on('data', data => {
        console.log(`>> stderr: ${data}`);
      });


      child.on('error', err => {
        console.error(`>> stderr: ${err}`);
        reject(err);
      });
      child.on('close', code => {
        clearTimeout(timeoutId);
        console.log(`>> ✅   Done   ✅`);
        console.log(`>> child process exited with code ${code}`);
        if (code === 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    })
  };

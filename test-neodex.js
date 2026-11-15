// lancé par le test « local » de NeoDex : une partie lancée, l'altitude changée avec 1 à 4, la molette et la souris (avec son repère)
module.exports = async ({ pj, sleep }) => {
  const lane = () => pj(`document.getElementById('gc').__sl()`);
  const key = k => pj(`document.dispatchEvent(new KeyboardEvent('keydown', {key: '${k}', bubbles: true})), 0`);
  for (let i = 0; i < 30 && await pj(`!document.querySelector('.rhBar') || !document.querySelector('.rhBar').hidden`) === false; i++) await sleep(500);
  await sleep(6000);  // le morceau intégré se prépare (rendu du son)
  await pj(`window.__e = []; addEventListener('error', e => __e.push(e.message)); 0`);
  await key(' '); await sleep(4000);
  if (await lane() == null) throw new Error('la partie devait commencer');
  await key('3'); await sleep(50); if (await lane() !== 2) throw new Error('la touche 3 devait mener à la 3e altitude : ' + await lane());
  await pj(`document.getElementById('gc').dispatchEvent(new WheelEvent('wheel', {deltaY: -100, bubbles: true, cancelable: true})), 0`); await sleep(50);
  if (await lane() !== 3) throw new Error('la molette vers le haut devait faire monter : ' + await lane());
  await pj(`document.getElementById('gc').dispatchEvent(new WheelEvent('wheel', {deltaY: 120, bubbles: true, cancelable: true})), 0`); await sleep(50);
  if (await lane() !== 0) throw new Error('trois crans vers le bas devaient faire descendre en bas : ' + await lane());
  await pj(`(() => { const c = document.getElementById('gc'), r = c.getBoundingClientRect(); c.dispatchEvent(new PointerEvent('pointermove', {clientX: r.left + r.width / 2, clientY: r.top + r.height * .25, bubbles: true})); })(), 0`); await sleep(300);
  if (await lane() !== 3) throw new Error('la souris en haut devait mener à la plus haute altitude : ' + await lane());
  // la manette : une fausse manette dont on appuie la croix (bas, puis haut) et le stick
  await pj(`(() => { window.__pad = {buttons: Array.from({length: 17}, () => ({pressed: false})), axes: [0, 0]}; navigator.getGamepads = () => [window.__pad]; return 0; })()`);
  const pad = async (b, on, ay = 0) => { await pj(`(() => { __pad.buttons[${b}].pressed = ${on}; __pad.axes[1] = ${ay}; return 0; })()`); await sleep(120); };
  await pad(13, true); await pad(13, false); if (await lane() !== 2) throw new Error('la croix vers le bas devait faire descendre : ' + await lane());
  await pad(12, true); await pad(12, false); if (await lane() !== 3) throw new Error('la croix vers le haut devait faire monter : ' + await lane());
  await pad(0, false, .9); await pad(0, false, 0); if (await lane() !== 2) throw new Error('le stick vers le bas devait faire descendre : ' + await lane());
  // l'écran de fin et sa courbe de précision (une partie inventée : juste au début, des ratés au milieu)
  await pj(`(() => { const T = document.getElementById('gc').__rh, rh = T.st(), L = rh.c.len, h = []; for (let i = 0; i < 200; i++) { const t = i / 200 * L, mid = t > L * .4 && t < L * .6; h.push([t, mid ? (i % 3 ? 1 : 0) : (i % 7 ? 3 : 2)]); } T.finish(h); return 0; })()`);
  await sleep(1200);
  const end = await pj(`(() => { const rh = document.getElementById('gc').__rh.st(); return [rh.mode, rh.hist.length].join(','); })()`);
  if (end !== 'over,200') throw new Error('écran de fin attendu : ' + end);
  if (process.env.NEO_SHOTS) { const d = await pj(`document.getElementById('gc').toDataURL()`); require('fs').writeFileSync(require('path').join(process.env.NEO_SHOTS, 'sillage-fin.png'), Buffer.from(d.split(',')[1], 'base64')); }
  const errs = await pj(`window.__e.join(' | ')`); if (errs) throw new Error('erreur : ' + errs);
  return 'touches 1 à 4, molette, souris, manette et écran de fin ok';
};

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
  const errs = await pj(`window.__e.join(' | ')`); if (errs) throw new Error('erreur : ' + errs);
  return 'touches 1 à 4, molette et souris ok';
};

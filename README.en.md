# Sillage (Wake)

A flying rhythm game: your ship speeds along four altitudes above a city at night. Climb and dive to pick up stars to the beat of the music, follow ribbons and get through energy gates with a boost. Play the 1200 tracks from the Rythme plugin, or your own music.

*Version française : [README.md](README.md)*

## Controls

- **↑** (or **W** / **Z**) and **↓** (or **S**), or the **mouse**: change altitude.
- **Space**, **Enter**, **D**, **→** or **click**: boost.
- **P**: pause · **Full screen** during the game.

## How to play

- **Stars**: they arrive at the altitude of their sound, low notes at the bottom, high notes at the top. Be at the right height when they reach the ship.
- **Ribbons** (long notes): stay at their altitude until the end.
- **Yellow gates**: trigger the boost as they pass; they turn white at the right moment.

## Accuracy and points

Each note is judged by how far it is from the right moment: **Perfect**, **Good**, **OK** or a miss. A note's points rise by 1 % per note of combo, up to double at 100 notes in a row; a miss resets the combo. At the end, accuracy gives a grade: **S** from 95 %, **A** at 90 %, **B** at 80 %, **C** at 70 %, **D** below.

## Songs and difficulty

The **Songs** tab offers the 1200 Rythme tracks. Each level's difficulty is worked out from its notes, from 1 to 10 stars.

## My music

In **My music**, create a level from an imported **audio file** or a track from your **NeoMusic** library: the game finds its tempo and strong beats and turns them into a level, at the chosen **difficulty**.

## Settings

- Music **volume**.
- **Hit sound**: the sound played on each note you hit, one of 10 (Soft, Clap, Wood, Kick, Crystal, Pop, Hi-hat, Snare, Pluck, Tock) or none. Losing a combo of 10 or more plays a « combo break » sound.
- **Offset** (−300 to +300 ms): it adjusts itself after each game based on your average lateness or earliness; you can also change it by hand.

## Data and sync

Your scores and grades per level and your settings are stored by NeoDex, backed up and synced between your PCs when sync is on.

## Install

In NeoDex: **NeoStore → Discover → Sillage → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).

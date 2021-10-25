import { Selector } from 'testcafe';
import fs from 'fs';
import { ClientFunction } from 'testcafe';
import { Console } from 'console';

fixture("user").page('https://webrtc.github.io/samples/src/content/getusermedia/canvas/');

test('Web cam test', async t => {
  await t
  .wait(5000);
    });






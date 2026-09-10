import test from "node:test"; import assert from "node:assert/strict";
import { MEMORIAS, criarLegenda } from "../src/dominio.ts";
test("há 3 memórias fictícias",()=>assert.equal(MEMORIAS.length,3));
test("legenda inclui categoria e comunidade",()=>{ const l=criarLegenda(MEMORIAS[0]); assert.match(l,/Relato/); assert.match(l,/Comunidade Fictícia A/); });

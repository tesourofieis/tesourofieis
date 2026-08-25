import type { MassMap } from "./domain";
import { TEMPORA_EPIFANIA } from "./observances/tempora/epifania";
import { TEMPORA_QUARESMA } from "./observances/tempora/quaresma";
import { TEMPORA_PASCOA } from "./observances/tempora/pascoa";
import { TEMPORA_PENTECOSTES } from "./observances/tempora/pentecostes";
import { TEMPORA_ADVENTO } from "./observances/tempora/advento";
import { SANCTI_EXTRA } from "./observances/sancti/extras";
import { SANCTI_01 } from "./observances/sancti/01";
import { SANCTI_02 } from "./observances/sancti/02";
import { SANCTI_03 } from "./observances/sancti/03";
import { SANCTI_04 } from "./observances/sancti/04";
import { SANCTI_05 } from "./observances/sancti/05";
import { SANCTI_06 } from "./observances/sancti/06";
import { SANCTI_07 } from "./observances/sancti/07";
import { SANCTI_08 } from "./observances/sancti/08";
import { SANCTI_09 } from "./observances/sancti/09";
import { SANCTI_10 } from "./observances/sancti/10";
import { SANCTI_11 } from "./observances/sancti/11";
import { SANCTI_12 } from "./observances/sancti/12";
import { COMMUNES } from "./observances/communes";
import { VOTIVAS } from "./observances/votivas";

/**
 * Catálogo completo de observâncias.
 *
 * Fisicamente dividido em lib/observances/ (tempora, sancti por mês,
 * comuns, votivas). A ordem dos spreads reproduz a ordem de inserção
 * histórica do mapa original - não reordenar sem verificar os snapshots.
 */
export const OBSERVANCES: MassMap = {
  ...TEMPORA_EPIFANIA,
  ...TEMPORA_QUARESMA,
  ...TEMPORA_PASCOA,
  ...TEMPORA_PENTECOSTES,
  ...TEMPORA_ADVENTO,
  ...SANCTI_EXTRA,
  ...SANCTI_01,
  ...SANCTI_02,
  ...SANCTI_03,
  ...SANCTI_04,
  ...SANCTI_05,
  ...SANCTI_06,
  ...SANCTI_07,
  ...SANCTI_08,
  ...SANCTI_09,
  ...SANCTI_10,
  ...SANCTI_11,
  ...SANCTI_12,
  ...COMMUNES,
  ...VOTIVAS,
} as const;

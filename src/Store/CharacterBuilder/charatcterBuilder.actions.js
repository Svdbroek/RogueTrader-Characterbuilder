import { CREATE } from "../actiontypes";

export const CHARACTER = "[CHARACTER]";

export const newCharacter = () => ({
  type: `${CHARACTER} ${CREATE}`,
  meta: { entity: CHARACTER, subEntity: CREATE },
});

/* import { translate } from '@vitalets/google-translate-api';

export async function GET(request: Request) {
  const wordFromUser = 'life';
  const { text: BanglaMeaning } = await translate(wordFromUser, { to: 'bn' });

  const resDictionaryapi = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${wordFromUser}`
  );

  const dataFromDictionaryapi = await resDictionaryapi.json();

  return new Response(
    JSON.stringify({ BanglaMeaning, ...dataFromDictionaryapi })
  );
}
 */

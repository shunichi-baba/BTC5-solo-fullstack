/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('diarys').del();
  await knex('diarys').insert([
    {
      id: 1,
      firstname: 'takeda',
      lastname: 'tetuya',
      diary: '今日は楽しかった',
      date: '2023-03-12',
    },
    {
      id: 2,
      firstname: 'matuko',
      lastname: 'deluxe',
      diary: '今日は沢山良いことあった',
      date: '2023-04-12',
    },
    {
      id: 3,
      firstname: 'matumoto',
      lastname: 'hitosi',
      diary: '今日は勉強になった',
      date: '2023-06-12',
    },
    {
      id: 4,
      firstname: 'hamada',
      lastname: 'masataka',
      diary: '今日は眠たかった',
      date: '2023-08-12',
    },
    {
      id: 5,
      firstname: 'horie',
      lastname: 'takafumi',
      diary: '今日もイケイケ',
      date: '2023-11-12',
    },
  ]);
};

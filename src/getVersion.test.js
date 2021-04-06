const {getVersion} = require('./getVersion');

jest.mock('../package.json', () => ({
  version: '1.1.1'
}))

test('get version of package json', async () => {

  const data = await getVersion();
  expect(data).toEqual('1.1.1');
});


// смотри, jest.fn создает пустую заглушку
// const event = jest.fn();

// someDomElm.addEventListener('onclick', event);
// в этом примере ты получил заглушку и теперь можешь в тесте проверить что она была вызвана

// test('some test', () => {
//   expect(mockCallback.mock.calls.length).toBe(1);
// })

// но если ты хочешь замокать функцию, которая должна что-то вернуть, то необходимо указать ее реализацию

// const mockFn = jest.fn(() => 42);

// const someFn = (callback) => {
// // ....
//   return callback();
// }
// в этом случае ты сделал функцию-заглушку, которая возвращает нужное тебе значение (42)

// test('some test', () => {
//   expect(someFn()).toBe(42)
// })

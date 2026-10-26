const p = Promise.all([
  Promise.resolve("a"),
  Promise.reject("fail"),
  new Promise((r) => setTimeout(() => r("c"), 100)),
]);
p.then((v) => console.log("ok", v)).catch((e) => console.log("err", e));
Promise.allSettled([Promise.resolve("a"), Promise.reject("fail")]).then((r) =>
  console.log(r.map((x) => x.status)),
);

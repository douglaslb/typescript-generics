{
  function convert<T, R = any>(x: T): R {
    return x as unknown as R;
  }

  convert<string>("1");
  convert<string, number>("1");

  function log<T = string>(msg: T) {
    console.log(msg);
  }

  log("a");
  log(1);
}

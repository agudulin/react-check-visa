require("babel/register");

require("./server/index")(function(app) {
  console.log("Express %s server listening on %s:%s", app.get("env"), app.get("host"), app.get("port"));

  if (app.get("env") === "development") {
    require("./server/dev")(app);
  }
});

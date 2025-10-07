import { type RouteConfig, index, route} from "@react-router/dev/routes";

/**
 * Her kan vi ligge til flere ruter hvis vi trenger det. Du kan lese mer her
 * https://reactrouter.com/start/framework/routing
 */

export default [
  index("pages/home.tsx"),
  route(
    "/.well-known/appspecific/com.chrome.devtools.json",
    "debug-null.tsx"
  ),
  route("*", "./not-found.tsx"),
] satisfies RouteConfig;

import { onRequestGet as __api_medikamente_js_onRequestGet } from "/home/computerspende/Schreibtisch/amp/functions/api/medikamente.js"
import { onRequestPost as __api_medikamente_js_onRequestPost } from "/home/computerspende/Schreibtisch/amp/functions/api/medikamente.js"

export const routes = [
    {
      routePath: "/api/medikamente",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_medikamente_js_onRequestGet],
    },
  {
      routePath: "/api/medikamente",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_medikamente_js_onRequestPost],
    },
  ]
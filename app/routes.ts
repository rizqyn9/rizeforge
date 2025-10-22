import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes"

export default [
  index("routes/index.tsx"),
  layout("routes/blog/layout.tsx", [route("blog", "routes/blog/index.tsx")]),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig

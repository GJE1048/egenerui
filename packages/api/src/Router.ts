
export type RouteHandler = (params: Record<string, string>) => void

export interface Route {
  path: string
  handler: RouteHandler
}

export class Router {
  private routes: Route[] = []
  private currentPath: string = ''
  
  constructor() {
    window.addEventListener('popstate', () => {
      this.handleRoute()
    })
    
    // Initial route
    window.addEventListener('load', () => {
      this.handleRoute()
    })
  }
  
  add(path: string, handler: RouteHandler): this {
    this.routes.push({ path, handler })
    return this
  }
  
  navigate(path: string): void {
    window.history.pushState({}, '', path)
    this.handleRoute()
  }
  
  private handleRoute(): void {
    const path = window.location.pathname
    this.currentPath = path
    
    for (const route of this.routes) {
      const match = this.matchPath(route.path, path)
      if (match) {
        route.handler(match)
        return
      }
    }
    
    // 404 handling if needed
    console.warn(`No route found for ${path}`)
  }
  
  private matchPath(routePath: string, currentPath: string): Record<string, string> | null {
    const routeParts = routePath.split('/')
    const currentParts = currentPath.split('/')
    
    if (routeParts.length !== currentParts.length) return null
    
    const params: Record<string, string> = {}
    
    for (let i = 0; i < routeParts.length; i++) {
      if (routeParts[i].startsWith(':')) {
        const paramName = routeParts[i].slice(1)
        params[paramName] = currentParts[i]
      } else if (routeParts[i] !== currentParts[i]) {
        return null
      }
    }
    
    return params
  }
}

let globalRouter: Router | null = null

export function getRouter(): Router {
  if (!globalRouter) {
    globalRouter = new Router()
  }
  return globalRouter
}

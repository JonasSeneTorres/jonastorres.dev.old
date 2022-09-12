import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';

export class JonastorresRoutes {
  static readonly HOME = new JonastorresRoutes('home', ['']);

  static readonly ADMIN = new JonastorresRoutes('admin', ['/admin']);

  static readonly ADMIN_ARTIGOS = new JonastorresRoutes('artigos', ['/admin/artigos']);
  static readonly ADMIN_ARTIGOS_NOVO = new JonastorresRoutes('novo', ['/admin/artigos/novos']);
  static readonly ADMIN_ARTIGOS_EDITAR = new JonastorresRoutes('editar', ['/admin/artigos/editar']);

  static readonly ADMIN_AUTOR = new JonastorresRoutes('artigos', ['/admin/artigos']);
  static readonly ADMIN_AUTOR_NOVO = new JonastorresRoutes('novo', ['/admin/artigos/novos']);
  static readonly ADMIN_AUTOR_EDITAR = new JonastorresRoutes('editar', ['/admin/artigos/editar']);

  static readonly ADMIN_CATEGORIA = new JonastorresRoutes('artigos', ['/admin/artigos']);
  static readonly ADMIN_CATEGORIA_NOVO = new JonastorresRoutes('novo', ['/admin/artigos/novos']);
  static readonly ADMIN_CATEGORIA_EDITAR = new JonastorresRoutes('editar', ['/admin/artigos/editar']);

  static readonly ADMIN_PERFILUSUARIO = new JonastorresRoutes('artigos', ['/admin/artigos']);
  static readonly ADMIN_PERFILUSUARIO_NOVO = new JonastorresRoutes('novo', ['/admin/artigos/novos']);
  static readonly ADMIN_PERFILUSUARIO_EDITAR = new JonastorresRoutes('editar', ['/admin/artigos/editar']);

  static readonly ADMIN_REDESSOCIAIS = new JonastorresRoutes('artigos', ['/admin/artigos']);
  static readonly ADMIN_REDESSOCIAIS_NOVO = new JonastorresRoutes('novo', ['/admin/artigos/novos']);
  static readonly ADMIN_REDESSOCIAIS_EDITAR = new JonastorresRoutes('editar', ['/admin/artigos/editar']);

  static readonly ADMIN_USUARIO = new JonastorresRoutes('artigos', ['/admin/artigos']);
  static readonly ADMIN_USUARIO_NOVO = new JonastorresRoutes('novo', ['/admin/artigos/novos']);
  static readonly ADMIN_USUARIO_EDITAR = new JonastorresRoutes('editar', ['/admin/artigos/editar']);

  static readonly BLOG = new JonastorresRoutes('blog', ['/blog']);

  static readonly BLOG_AUTOR = new JonastorresRoutes('sobre', ['/blog/autor']);

  static readonly BLOG_ARQUITETURA = new JonastorresRoutes('arquitetura', ['/blog/arquitetura']);

  static readonly BLOG_BACKEND = new JonastorresRoutes('backend', ['/blog/backend']);
  static readonly BLOG_BACKEND_C_SHARP = new JonastorresRoutes('c#', ['/blog/backend/c_sharp']);
  static readonly BLOG_BACKEND_NODE = new JonastorresRoutes('node', ['/blog/backend/node']);

  static readonly BLOG_FRONTEND = new JonastorresRoutes('frontend', ['/blog/frontend']);
  static readonly BLOG_FRONTEND_HTML = new JonastorresRoutes('html', ['/blog/frontend/html']);
  static readonly BLOG_FRONTEND_CSS = new JonastorresRoutes('css', ['/blog/frontend/css']);
  static readonly BLOG_FRONTEND_JS = new JonastorresRoutes('js', ['/blog/frontend/js']);
  static readonly BLOG_FRONTEND_ANGULAR = new JonastorresRoutes('angular', ['/blog/frontend/angular']);

  static readonly BLOG_MOBILE = new JonastorresRoutes('home', ['/blog/mobile']);
  static readonly BLOG_MOBILE_FLUTTER = new JonastorresRoutes('home', ['/blog/mobile/flutter']);

  static readonly CONTATO = new JonastorresRoutes('blog', ['/contato']);

  static readonly SOBRE = new JonastorresRoutes('sobre', ['/sobre']);

  private constructor(
    public readonly label: string,
    public readonly router?: string[]
  ) {}

  toBreadcrumb(): BreadcrumbsItem {
    return {
      label: this.label,
      route: this.router,
    };
  }
}

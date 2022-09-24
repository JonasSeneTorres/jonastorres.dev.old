import { BreadcrumbsItem } from 'projects/guide-dog/src/lib/types/breadcrumbs-item.type';

export class JonastorresRoutes {
  static readonly HOME = new JonastorresRoutes('Home', ['']);

  static readonly ADMIN = new JonastorresRoutes('Admin', ['/admin']);

  static readonly ADMIN_ARTIGOS = new JonastorresRoutes('Artigos', ['/admin/artigos']);
  static readonly ADMIN_ARTIGOS_NOVO = new JonastorresRoutes('Novo', ['/admin/artigos/novo']);
  static readonly ADMIN_ARTIGOS_EDITAR = new JonastorresRoutes('Editar', ['/admin/artigos/editar']);

  static readonly ADMIN_AUTOR = new JonastorresRoutes('Autores', ['/admin/autores']);
  static readonly ADMIN_AUTOR_NOVO = new JonastorresRoutes('Novo', ['/admin/autores/novos']);
  static readonly ADMIN_AUTOR_EDITAR = new JonastorresRoutes('Editar', ['/admin/autores/editar']);

  static readonly ADMIN_CATEGORIA = new JonastorresRoutes('Artigos', ['/admin/artigos']);
  static readonly ADMIN_CATEGORIA_NOVO = new JonastorresRoutes('Novo', ['/admin/artigos/novos']);
  static readonly ADMIN_CATEGORIA_EDITAR = new JonastorresRoutes('Editar', ['/admin/artigos/editar']);

  static readonly ADMIN_PERFILUSUARIO = new JonastorresRoutes('Artigos', ['/admin/artigos']);
  static readonly ADMIN_PERFILUSUARIO_NOVO = new JonastorresRoutes('Novo', ['/admin/artigos/novos']);
  static readonly ADMIN_PERFILUSUARIO_EDITAR = new JonastorresRoutes('Editar', ['/admin/artigos/editar']);

  static readonly ADMIN_REDESSOCIAIS = new JonastorresRoutes('Artigos', ['/admin/artigos']);
  static readonly ADMIN_REDESSOCIAIS_NOVO = new JonastorresRoutes('Novo', ['/admin/artigos/novos']);
  static readonly ADMIN_REDESSOCIAIS_EDITAR = new JonastorresRoutes('Editar', ['/admin/artigos/editar']);

  static readonly ADMIN_USUARIO = new JonastorresRoutes('Artigos', ['/admin/artigos']);
  static readonly ADMIN_USUARIO_NOVO = new JonastorresRoutes('Novo', ['/admin/artigos/novos']);
  static readonly ADMIN_USUARIO_EDITAR = new JonastorresRoutes('Editar', ['/admin/artigos/editar']);

  static readonly BLOG = new JonastorresRoutes('Blog', ['/blog']);

  static readonly CONTATO = new JonastorresRoutes('Blog', ['/contato']);

  static readonly SOBRE = new JonastorresRoutes('Sobre', ['/sobre']);

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

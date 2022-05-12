import { NavibarItemConfig } from 'projects/guide-dog/src/lib/types/navibar-item-config';

// {
//   label: string;
//   route?: string;
//   click?: Function;
//   children?: MenuConfigItem[];
// },
export const NavibarConfig: NavibarItemConfig[] = [
  // {
  //   label: 'Home',
  //   route: ['/'],
  // },
  {
    label: 'Acessibilidade',
    route: ['/acessibilidade'],
  },
  {
    label: 'Autor',
    route: ['/autor'],
  },
  {
    label: 'Erro',
    route: ['/erro'],
  },
  {
    label: 'Pagina não encontrada',
    route: ['/aa'],
  },
  {
    label: 'Link com filhos',
    children: [
      {
        label: 'Home',
        route: [''],
      },
      {
        label: 'Acessibilidade',
        route: ['/acessibilidade'],
      },
      {
        label: 'Autor',
        route: ['/autor'],
      },
      {
        label: 'Erro',
        route: ['/erro'],
      },
      {
        label: 'Pagina não encontrada',
        route: ['/aa'],
      },
      {
        label: 'alert',
      },
      {
        label: 'Link com filhos',
        children: [
          {
            label: 'Home',
            route: [''],
          },
          {
            label: 'Acessibilidade',
            route: ['/acessibilidade'],
          },
          {
            label: 'Autor',
            route: ['/autor'],
          },
          {
            label: 'Erro',
            route: ['/erro'],
          },
          {
            label: 'Pagina não encontrada',
            route: ['/aa'],
          },
          {
            label: 'alert',
          },
          {
            label: 'Link com filhos',
            children: [
              {
                label: 'Pagina não encontrada',
                route: ['/aa'],
              },
              {
                label: 'Pagina não encontrada',
                route: ['/aa'],
              },
            ]
          },
        ]
      },
    ]
  },
];

import { NavibarItemConfig } from 'projects/guide-dog/src/lib/types/navibar-item-config';

export const NavibarConfig: NavibarItemConfig[] = [
  {
    label: 'Frontend',
    children: [
      {
        label: 'HTML',
        route: ['/frontend/html'],
      },
      {
        label: 'CSS',
        route: ['/frontend/css'],
      },
      {
        label: 'Javascript/Typescript',
        route: ['/frontend/js'],
      },
      {
        label: 'Angular',
        route: ['/frontend/angular'],
      },
    ],
  },
  {
    label: 'Backend',
    children: [
      {
        label: 'C#',
        route: ['/backend/c_sharp'],
      },
      // {
      //   label: 'C#',
      //   route: ['/backend/c-sharp'],
      // },
      {
        label: 'Node',
        route: ['/backend/node'],
      },
    ],
  },
  {
    label: 'Mobile',
    children: [
      {
        label: 'Flutter',
        route: ['/mobile/flutter'],
      },
    ],
  },
  {
    label: 'Banco de dados',
    children: [
      {
        label: 'SQL',
        route: ['/banco_de_dados/sql'],
      },
    ],
  },
  {
    label: 'Arquitetura',
    route: ['/arquitetura'],
  },
  // {
  //   label: 'Arquitetura',
  //   children: [
  //     {
  //       label: 'C#',
  //       route: ['/erro'],
  //     },
  //   ],
  // },
  // {
  //   label: 'Mobile',
  //   children: [
  //     {
  //       label: 'C#',
  //       route: ['/erro'],
  //     },
  //   ],
  // },
  {
    label: 'Sobre',
    route: ['/sobre'],
  },
  {
    label: 'Autor',
    route: ['/autor'],
  },
  // {
  //   label: 'categoria',
  //   route: ['/categoria'],
  // },
  // {
  //   label: 'artigo',
  //   route: ['/artigo'],
  // },
  // {
  //   label: 'busca',
  //   route: ['/busca'],
  // },
  // {
  //   label: 'erro',
  //   route: ['/erro'],
  // },
  // {
  //   label: 'pagina n encontrada',
  //   route: ['/aa'],
  // },
  {
    label: 'Contato',
    route: ['/contato'],
  },
  // {
  //   label: 'Acessibilidade',
  //   route: ['/acessibilidade'],
  // },
  // {
  //   label: 'Autor',
  //   route: ['/autor'],
  // },
  // {
  //   label: 'Erro',
  //   route: ['/erro'],
  // },
  // {
  //   label: 'teste',
  //   route: ['/aa'],
  // },
  // {
  //   label: 'teste',
  //   children: [
  //     {
  //       label: 'Home',
  //       route: [''],
  //     },
  //     {
  //       label: 'Acessibilidade',
  //       route: ['/acessibilidade'],
  //     },
  //     {
  //       label: 'Autor',
  //       route: ['/autor'],
  //     },
  //     {
  //       label: 'Erro',
  //       route: ['/erro'],
  //     },
  //     {
  //       label: 'Pagina não encontrada',
  //       route: ['/aa'],
  //     },
  //     {
  //       label: 'alert',
  //     },
  //     {
  //       label: 'Link com filhos',
  //       children: [
  //         {
  //           label: 'Home',
  //           route: [''],
  //         },
  //         {
  //           label: 'Acessibilidade',
  //           route: ['/acessibilidade'],
  //         },
  //         {
  //           label: 'Autor',
  //           route: ['/autor'],
  //         },
  //         {
  //           label: 'Erro',
  //           route: ['/erro'],
  //         },
  //         {
  //           label: 'Pagina não encontrada',
  //           route: ['/aa'],
  //         },
  //         {
  //           label: 'alert',
  //         },
  //         {
  //           label: 'Link com filhos',
  //           children: [
  //             {
  //               label: 'Pagina não encontrada',
  //               route: ['/aa'],
  //             },
  //             {
  //               label: 'Pagina não encontrada',
  //               route: ['/aa'],
  //             },
  //           ]
  //         },
  //       ]
  //     },
  //   ]
  // },
];

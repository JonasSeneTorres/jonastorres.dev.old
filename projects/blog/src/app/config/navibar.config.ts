import { NavibarItemConfig } from 'projects/guide-dog/src/lib/types/navibar-item-config';

export const NavibarConfig: NavibarItemConfig[] = [
  {
    label: 'Frontend',
    children: [
      {
        label: 'HTML',
        route: ['blog/frontend/html'],
      },
      {
        label: 'CSS',
        route: ['blog/frontend/css'],
      },
      {
        label: 'Javascript/Typescript',
        route: ['blog/frontend/js'],
      },
      {
        label: 'Angular',
        route: ['blog/frontend/angular'],
      },
    ],
  },
  {
    label: 'Backend',
    children: [
      {
        label: 'C#',
        route: ['blog/backend/c_sharp'],
      },
      {
        label: 'Node',
        route: ['blog/backend/node'],
      },
    ],
  },
  {
    label: 'Mobile',
    children: [
      {
        label: 'Flutter',
        route: ['blog/mobile/flutter'],
      },
    ],
  },
  {
    label: 'Banco de dados',
    children: [
      {
        label: 'SQL',
        route: ['blog/banco_de_dados/sql'],
      },
    ],
  },
  {
    label: 'Arquitetura',
    route: ['blog/arquitetura'],
  },
  {
    label: 'Sobre',
    route: ['/sobre'],
  },
  {
    label: 'Autor',
    route: ['blog/autor'],
  },
  {
    label: 'Contato',
    route: ['/contato'],
  },




  // {
  //   label: 'Sobre',
  //   route: ['/sobre'],
  // },
  // {
  //   label: 'Autor',
  //   route: ['/autor'],
  // },
  // {
  //   label: 'Contato',
  //   route: ['/contato'],
  // },{
  //   label: 'Sobre',
  //   route: ['/sobre'],
  // },
  // {
  //   label: 'Autor',
  //   route: ['/autor'],
  // },
  // {
  //   label: 'Contato',
  //   route: ['/contato'],
  // },
];

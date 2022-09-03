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
  {
    label: 'Sobre',
    route: ['/sobre'],
  },
  {
    label: 'Autor',
    route: ['/autor'],
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

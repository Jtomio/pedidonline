import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function IceCreams() {
  const data = [
    {
      id: 1,
      snack: 'icecreams',
      name: 'Amora',
      description: 'Sobremesa gelada e deliciosa com sabor de amora.',
      price: 25.9,
      image: 'https://i.imgur.com/uhOQ5wdb.jpg',
    },
    {
      id: 2,
      snack: 'icecreams',
      name: 'Ice beans',
      description: 'Novidade e saboroso Ice Beans.',
      price: 27.9,
      image: 'https://i.imgur.com/C2XQyhe.jpeg',
    },
    {
      id: 3,
      snack: 'icecreams',
      name: 'Confete com Nutella',
      description: 'O irresistivel sabor de Nutella com Confetes',
      price: 23.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmKILmykkuX4vg99tJKbTxHY0aeX4x0H1gGL3DIg-qVH2nJqmmWHwp9_jDCqTj6rEjKA&usqp=CAU',
    },
    {
      id: 4,
      snack: 'icecreams',
      name: 'Casquinha',
      description: 'A casquinha crocante',
      price: 15.5,
      image: 'https://s2.glbimg.com/snBkNVK6NOURbPWxBDOSQBKwhoE=/620x520/e.glbimg.com/og/ed/f/original/2020/09/21/escola_sorvete_foto_gabriel_reis_17.jpg',
    },
    {
      id: 5,
      snack: 'icecreams',
      name: 'Completão',
      description: 'Uma quantidade absurda de sorvete e acompanhamentos.',
      price: 19.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMx1bgdG2vv8tlaeHVfvAQBg_mscKkRR35TmuCh-g41yvq_R0O-ZopfqSfkF76TmyDdVc&usqp=CAU',
    },
  ]

  return (
    <>
    <Head title='Sovervetes' />
    <SnackTitle>Sorvetes</SnackTitle>
    <Snacks snacks={data} />
    </>
  )
}

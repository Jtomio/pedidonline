import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'


export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Mega',
      description: 'Rápido para combater a fome, o burger com carne nobre.',
      price: 25.9,
      image: 'https://i.imgur.com/upjIUnG.jpg',
    },
    {
      id: 2,
      snack: 'burger',
      name: 'Extra bacon',
      description: 'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne.',
      price: 27.9,
      image: 'https://i.imgur.com/B4J04AJ.jpg',
    },
    {
      id: 3,
      snack: 'burger',
      name: 'Mega',
      description: 'Burger para aqueles que aceitam desafios de sabor nesse lanche delicioso.',
      price: 25.5,
      image: 'https://i.imgur.com/ptXgPVMb.jpg',
    },
    {
      id: 4,
      snack: 'burger',
      name: 'Duplo',
      description: 'Big Carne, Big sabor para grandes fomes',
      price: 25.5,
      image: 'https://i.imgur.com/L5IhOunb.jpg',
    },
    {
      id: 5,
      snack: 'burger',
      name: 'Tradicional',
      description: 'O simples também é delicioso, principalmente se envolver nossa carne artesanal e muiiiito queijo',
      price: 25.5,
      image: 'https://i.imgur.com/QwMc0Gab.jpg',
    },
  ]

  return (
    <>
    <Head title='Hamburgers' description='Nossos melhores burguers'/>
    <SnackTitle>Hamburgers</SnackTitle>
    <Snacks snacks={data} />
    </>
  )
}

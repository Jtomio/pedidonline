import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'


export default function Pizzas() {
  const data = [
    {
      id: 1,
      snack: 'pizzas',
      name: 'Calabresa',
      description: 'Pizza de calabresa com molho de tomata e muito queijo.',
      price: 35.9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7sTfJ_ovQjJLcxXf0oZQDhmCZG5cXceRcyg&usqp=CAU',
    },
    {
      id: 2,
      snack: 'pizzas',
      name: 'Frango catupiry',
      description: 'Novidade e saboroso Ice Beans.',
      price: 27.9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXESrT1tMn1XepZ9NUel1YJHKtrmwbxXvlPQ&usqp=CAU',
    },
    {
      id: 3,
      snack: 'pizzas',
      name: 'Peperoni',
      description: 'A receita secreta direto da Itália',
      price: 23.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFEUW1KgAcjR0sgEiPiBiTuvG2W3xCYuLs8Q&usqp=CAU',
    },
    {
      id: 4,
      snack: 'pizzas',
      name: '5 queijos',
      description: 'Alguém pediu, queijo? queijo? queijo? muito queijo?',
      price: 15.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnrx1jwyJHJGJpul0VGJaANC6RUIUbvBFfw&usqp=CAU',
    },
    {
      id: 5,
      snack: 'pizzas',
      name: 'Atum',
      description: 'Direto do mar de Atlanta.',
      price: 19.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTox4gukl_YPWFLiR9oRZpOwzXa74KCNmrqNg&usqp=CAU',
    },
  ]



  return (
    <>
    <Head title='Pizzas' />
    <SnackTitle>Pizzas</SnackTitle>
    <Snacks snacks={data}  />
    </>
  )
}

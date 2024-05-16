import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      Items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'table',
          price: '149.99'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofa',
          price: '249.99'
        },
        {
          id: 4,
          title: 'Светильник',
          img: 'lamp.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'lamp',
          price: '29.99'
        },
        {
          id: 5,
          title: 'Кровать',
          img: 'bed.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'bed',
          price: '449.99'
        },
        {
          id: 6,
          title: 'Кресло',
          img: 'armchair.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'armchair',
          price: '249.99'
        },
        {
          id: 7,
          title: 'Тумба',
          img: 'cabinet.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'cabinet',
          price: '39.99'
        },
      ]
    }
    this.state.currentItems = this.state.Items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items Items={this.state.currentItems} onAdd={this.addToOrder}/>
        <Footer />
      </div>
    )
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.Items})
      return
    }

    this.setState({
      currentItems: this.state.Items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
    this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;

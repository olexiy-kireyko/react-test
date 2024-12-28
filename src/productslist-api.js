const productsList = [
  {
    id: 'id-1',
    name: 'apple',
    price: 200,
    descr:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntu facere, minus maiores, voluptatum consequatur at magni dignissimos laboriosam consectetur, accusamus velit perferendis fuga iste unde nam',
  },
  {
    id: 'id-2',
    name: 'apple juice',
    price: 400,
    descr:
      'ipsum dolor sit amet consectetur, adipisicing elit. Consequuntu facere, minus maiores, voluptatum consequatur at magni dignissimos laboriosam consectetur, accusamus velit perferendis fuga iste unde nam',
  },
  {
    id: 'id-3',
    name: 'pear',
    price: 100,
    descr:
      'dolor sit amet consectetur, adipisicing elit. Consequuntu facere, minus maiores, voluptatum consequatur at magni dignissimos laboriosam consectetur, accusamus velit perferendis fuga iste unde nam',
  },
  {
    id: 'id-4',
    name: 'orange',
    price: 200,
    descr:
      'sit amet consectetur, adipisicing elit. Consequuntu facere, minus maiores, voluptatum consequatur at magni dignissimos laboriosam consectetur, accusamus velit perferendis fuga iste unde nam',
  },
];

export const getProductList = () => {
  return productsList;
};

export const getProductItem = ID => {
  return productsList.find(product => product.id === ID);
};

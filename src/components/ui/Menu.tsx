/* Menu.tsx */
import React from 'react';

type MenuItem = { name: string; price: string; description: string };
type MenuCategory = { title: string; items: MenuItem[] };

const menu: MenuCategory[] = [
  {
    title: 'Appetizers',
    items: [
      {
        name: '(4) Chicken Tenders Handmade',
        price: '$7.00',
        description:
          'Crispy, handmade chicken tenders served with a side of dipping sauce. Four pieces per serving.',
      },
      {
        name: '(4) Bank Rolls',
        price: '$16.00',
        description:
          'Savory Ribeye, Cooper Sharp, and caramelized onions wrapped in crispy pastry, served with spicy ketchup.',
      },
      {
        name: 'Calamari',
        price: '$14.00',
        description:
          'Lightly fried calamari rings with banana peppers served with a side of marinara.',
      },
      {
        name: 'Cauliflower Wings',
        price: '$13.00',
        description:
          'Breaded cauliflower florets tossed in any of our wing sauces, served with ranch or blue cheese.',
      },
      {
        name: 'Dynamite Shrimp',
        price: '$15.00',
        description:
          'Crispy breaded shrimp tossed in spicy aioli and served over lettuce.',
      },
      {
        name: 'Hummus',
        price: '$13.00',
        description:
          'Creamy chickpea dip with olive oil and warm spices, served with pita and veggies.',
      },
      {
        name: 'Loaded Chips',
        price: '$16.00',
        description:
          'House-made chips topped with Gruyère cheese sauce, shredded chicken, honey-hot drizzle, jalapeños, green onions, and sour cream.',
      },
      {
        name: 'Big Mozz Sticks (4)',
        price: '$9.00',
        description:
          'Crispy fried mozzarella served with zesty marinara.',
      },
      {
        name: 'Steamed Clams',
        price: '$15.00',
        description:
          'Dozen clams in white garlic-butter wine sauce or red herb sauce, served with bread.',
      },
    ],
  },
  {
    title: 'Wings / Boneless Wings',
    items: [
      {
        name: '(12) Bone-In Wings',
        price: '$17.00',
        description:
          'Juicy wings tossed in your choice of sauce, with celery and blue cheese or ranch.',
      },
      {
        name: '(12) NO Bone Wings',
        price: '$13.00',
        description:
          'Tender boneless wings tossed in sauce, with celery and blue cheese or ranch.',
      },
      {
        name: '(18) Bone-In Wings',
        price: '$25.00',
        description:
          'Large order of bone-in wings with sauce, celery, and blue cheese or ranch.',
      },
      {
        name: '(18) NO Bone Wings',
        price: '$19.00',
        description:
          'Large order of boneless wings with sauce, celery, and blue cheese or ranch.',
      },
      {
        name: '(6) Bone-In Wings',
        price: '$9.00',
        description:
          'Small order of bone-in wings with sauce, celery, and blue cheese or ranch.',
      },
      {
        name: '(6) NO Bone Wings',
        price: '$7.00',
        description:
          'Hand-breaded boneless wings with sauce, celery, and blue cheese or ranch.',
      },
    ],
  },
  {
    title: 'Flatbreads',
    items: [
      {
        name: 'Apple Brie Flatbread',
        price: '$17.00',
        description:
          'Sliced apples and creamy brie topped with habanero bacon jam and honey drizzle.',
      },
      {
        name: 'Carnivore Flatbread',
        price: '$17.00',
        description:
          'Pepperoni, sausage, bacon, and shredded chicken with tomato sauce and mozzarella.',
      },
      {
        name: 'Honey Hot Chicken Flatbread',
        price: '$16.00',
        description:
          'Honey-hot chicken, mozzarella, celery, and dressing drizzle.',
      },
      {
        name: 'Margherita Flatbread',
        price: '$15.00',
        description:
          'Fresh basil, mozzarella, and rich tomato sauce.',
      },
      {
        name: 'Veggie Flatbread',
        price: '$15.00',
        description:
          'Tomatoes, onion, peppers, mozzarella, ricotta, and olive oil.',
      },
      {
        name: 'White Flatbread',
        price: '$15.00',
        description:
          'Mozzarella, ricotta, Parmesan, basil, and crushed red pepper.',
      },
    ],
  },
  {
    title: 'Sandwiches',
    items: [
      {
        name: 'BLT',
        price: '$11.00',
        description:
          'Bacon, lettuce, tomato, and mayo on white toast with chips.',
      },
      {
        name: 'Crispy Chicken Sandwich',
        price: '$14.00',
        description:
          'Fried chicken breast with lettuce, tomato, pickles, and white BBQ on a bun with chips.',
      },
      {
        name: 'Prime Rib Cheesesteak',
        price: '$17.00',
        description:
          'Thin ribeye, Cooper sharp, and caramelized onions on a long roll with chips.',
      },
      {
        name: 'Roast Pork Sandwich',
        price: '$15.00',
        description:
          'Roast pork, broccoli rabe, sharp provolone, and long hots on Italian bread with au jus and chips.',
      },
      {
        name: 'Sausage Sandwich',
        price: '$14.00',
        description:
          'Italian sausage with peppers and onions, served with chips.',
      },
      {
        name: 'Shrimp Po Boy',
        price: '$14.00',
        description:
          'Fried shrimp, remoulade, lettuce, tomato, and pickles on a roll with chips.',
      },
    ],
  },
  {
    title: 'Smash Burgers',
    items: [
      {
        name: 'All American Burger',
        price: '$14.00',
        description:
          'Two smashed patties, lettuce, tomato, onion, Cooper sharp, on brioche with chips.',
      },
      {
        name: 'Tear Gas Burger',
        price: '$15.00',
        description:
          'Two patties, roasted long hots, prosciutto, provolone sauce, on brioche with chips.',
      },
      {
        name: 'The Bankers Burger',
        price: '$16.00',
        description:
          'Two patties, whisky glaze, frizzled onions, bacon, lettuce, Gruyère sauce, on brioche with chips.',
      },
      {
        name: 'The Guap Burger',
        price: '$16.00',
        description:
          'Two patties, fried egg, pork roll, bacon, hash brown, Cooper sharp, lettuce, on brioche with chips.',
      },
      {
        name: 'The Moola Burger',
        price: '$15.00',
        description:
          'Two patties, tomato sauce, mozzarella, pepperoni, on brioche with chips.',
      },
    ],
  },
  {
    title: 'Salads',
    items: [
      {
        name: 'Caesar Salad',
        price: '$13.00',
        description:
          'Romaine, shaved Parmesan, croutons, and signature Caesar dressing.',
      },
      {
        name: 'Caprese Salad',
        price: '$14.00',
        description:
          'Tomatoes, mozzarella, basil, olive oil, and balsamic reduction.',
      },
      {
        name: 'House Salad',
        price: '$13.00',
        description:
          'Mixed greens, tomato, onion, and house dressing.',
      },
    ],
  },
];

const Menu: React.FC = () => (
  <section className="py-16 text-[#222]">
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex items-center justify-center mb-12">
        <hr className="flex-grow border-t border-gray-300" />
        <h2 className="px-6 text-4xl font-serif">Menu</h2>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      {menu.map((cat) => (
        <div key={cat.title} className="mb-12">
          <h3 className="mb-6 text-lg font-extrabold tracking-wide uppercase">
            {cat.title}
          </h3>

          <div className="grid gap-y-8 gap-x-16 md:grid-cols-2">
            {cat.items.map(({ name, price, description }) => (
              <div key={name}>
                <div className="flex justify-between">
                  <span className="font-semibold uppercase tracking-wide text-gray-600">
                    {name}
                  </span>
                  <span className="font-semibold text-gray-600">{price}</span>
                </div>
                <p className="mt-1 text-sm leading-snug text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Menu;

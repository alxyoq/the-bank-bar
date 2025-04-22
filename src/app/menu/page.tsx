import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu | Woodbury Station Cafe',
  description:
    'Explore our full menu at Woodbury Station Cafe – steak sandwiches, Italian classics, pizza, seafood and more, all prepared fresh to order.',
};

/** Utility – build clean anchor ids */
const slugify = (txt: string) =>
  txt
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-');

type MenuItem = { name: string; price: string; description?: string };
interface MenuSection {
  title: string;
  items: MenuItem[];
}

/****************************
 *  MENU DATA (except Bevs + Catering)
 ***************************/
const menuSections: MenuSection[] = [
  // 🥩 Steak Sandwiches
  {
    title: 'Steak Sandwiches',
    items: [
      { name: 'Cheese Steak', price: '$14.00' },
      { name: 'Buffalo Chicken Cheese Steak Sandwich', price: '$14.00' },
      { name: 'Philly Cheese Steak Sandwich', price: '$14.00', description: 'Steak, fried onions, cheddar.' },
      { name: 'Chicken Cheese Steak Sandwich', price: '$14.00' },
      { name: 'Cheese Steak Hoagie Sandwich', price: '$15.00', description: 'Lettuce, tomato, onion.' },
      { name: 'Pizza Steak Sandwich', price: '$14.00', description: 'Mozzarella, marinara.' },
      { name: 'Plain Steak Sandwich', price: '$13.00' },
    ],
  },
  // 🥖 Italian Sandwiches
  {
    title: 'Italian Sandwiches',
    items: [
      { name: 'Roast Pork, Broccoli Rabe, Provolone Picante Sandwich', price: '$15.00' },
      { name: 'Meatball Parm Sandwich', price: '$13.00' },
      { name: 'Eggplant Parm Sandwich', price: '$13.00' },
      { name: 'Hot Roast Beef & Provolone Sandwich', price: '$12.00' },
      { name: 'Sausage Parm Sandwich', price: '$13.00' },
      { name: 'Pepper & Egg Sandwich', price: '$11.00' },
      { name: 'Veggie & Mozzarella Sandwich', price: '$13.00' },
    ],
  },
  // 🍕 Pizza
  {
    title: 'Pizza',
    items: [
      { name: 'NEW YORK STYLE PIZZA', price: "$15.00 / 14'' | $19.00 / 18''", description: 'classic N.Y. pizza | mozzarella, pizza sauce' },
      { name: 'WHITE PIZZA', price: '$15.00', description: 'garlic, evoo, mozzarella, herbs.' },
      { name: 'MARGHERITA PIZZA', price: "$19.00 / 14'' | $24.00 / 18''", description: 'tomato sauce, fresh mozzarella, fresh basil, olive oil' },
      { name: 'ITALIAN TOMATO PIE', price: '$15.00', description: 'chunky tomato sauce, pecorino, olive oil.' },
      { name: 'PROSCIUTTO PIZZA', price: '$19.00', description: 'chunky tomato sauce, fresh mozzarella, arugula, shaved parmesan' },
      { name: 'SPINACH PIZZA', price: '$19.00', description: 'spinach, ricotta, tomato, garlic, mozzarella, garlic crust.' },
      { name: 'BUFFALO CHICKEN PIZZA', price: '$17.00', description: 'spicy chicken, ranch dressing, mozzarella.' },
      { name: 'JACK MAC PIZZA', price: '$19.00', description: 'mozzarella, sauce on top, romano, sesame crust.' },
      { name: '"the" WORKS PIZZA', price: '$20.00', description: 'pepperoni, sausage, peppers, mushrooms, onions, olives.' },
      { name: 'DOWNTOWN PHILLY CHEESESTEAK PIZZA', price: '$25.00', description: 'steak, fried onions, American cheese, cheese wiz, inverted crust.' },
      { name: 'VEGGIE PIZZA', price: '$20.00', description: 'spinach, broccoli, peppers, mushrooms, olives, onions.' },
      { name: 'HAWAIIAN PIZZA', price: '$21.00', description: 'pork, ham, bacon, pineapple, bbq sauce.' },
      { name: 'PIE-ZAZZ', price: '$18.00', description: 'American cheese, tomatoes, hot peppers, oregano' },
      { name: 'CAJUN PIZZA', price: '$19.00', description: 'chicken, tomato, hot peppers, onions, mozzarella, cheddar, cajun crust.' },
    ],
  },
  // 🌯 Stromboli
  {
    title: 'Stromboli',
    items: [
      { name: 'STEAK STROMBOLI', price: '$19.00', description: 'steak, mozzarella, sauce.' },
      { name: 'PIZZA TURNOVER', price: '$12.00', description: 'marinara, mozzarella.' },
      { name: 'ITALIAN STROMBOLI', price: '$18.00', description: 'ham, salami, pepperoni, sausage, peppers, mushrooms, onions, marinara.' },
      { name: 'CALZONE', price: '$12.00', description: 'mozzarella, ricotta, side of marinara.' },
      { name: 'VEGGIE STROMBOLI', price: '$18.00', description: 'spinach, broccoli, mushrooms, roasted peppers, onions, olives, mozzarella, marinara.' },
    ],
  },
  // ⭐ Starters
  {
    title: 'Starters',
    items: [
      { name: 'Calamari', price: '$17.00', description: 'Hot peppers, marinara, aioli.' },
      { name: 'Stuffed Long Hots', price: '$13.00', description: 'Sausage, provolone.' },
      { name: 'Bruschetta', price: '$11.00', description: 'Tomato, basil, mozzarella.' },
      { name: 'Crab Spiders', price: '$16.00', description: 'Crab, angel hair, lemon curd.' },
      { name: 'Fried Green Beans', price: '$11.00' },
      { name: 'Caprese Salad', price: '$13.00', description: 'Tomato, basil, fresh mozzarella.' },
      { name: 'Margherita Flatbread', price: '$12.00', description: 'Tomato, basil, fresh mozzarella.' },
      { name: 'Mussels', price: '$18.00', description: 'Tomato, white wine, garlic.' },
    ],
  },
  // 🥗 Salads
  {
    title: 'Salads',
    items: [
      { name: 'Caesar Salad', price: '$11.00', description: 'Romaine, croutons, tomato, cucumber, egg, shaved parmesan' },
      { name: 'House Salad', price: '$10.00', description: 'Iceberg, mixed greens, tomato, cucumber, sweet peppers, olives, garbanzo beans, red onion, crouton, egg.' },
      { name: 'Nutty Tooty Fruity Salad', price: '$13.00', description: 'Spring mix, apple, pear, craisins, glazed walnuts, strawberries, champagne vinaigrette.' },
      { name: 'Cobb Salad', price: '$16.00', description: 'Romaine, chicken, bacon, avocado, bleu cheese, tomato, egg.' },
      { name: 'Chopped Antipasto Salad', price: '$16.00', description: 'Romaine, arugula, radicchio, Genoa salami, provolone, prosciutto, artichoke, roasted red peppers, kalamata olives.' },
      { name: 'Crab Spider Salad', price: '$20.00', description: 'Crab, capellini, mango, spring mix, lemon curd, champagne vinaigrette.' },
      { name: 'Tuna Salad', price: '$13.00', description: 'House salad blend, tuna.' },
      { name: 'Veggie Licious Salad', price: '$13.00', description: 'Spinach, roasted red peppers, mushrooms, asparagus, provolone picante, house dressing.' },
      { name: 'Chef Salad', price: '$13.00', description: 'House salad blend, ham, turkey, provolone.' },
    ],
  },
  // 🍝 Classic Italian
  {
    title: 'Classic Italian',
    items: [
      { name: 'Fettuccine Alfredo', price: '$25.00', description: 'Add Chicken & Broccoli +$5' },
      { name: 'Lasagna', price: '$25.00', description: 'Beef, sausage, ricotta, mozzarella, marinara.' },
      { name: 'Ravioli', price: '$22.00', description: 'Mozzarella, marinara.' },
      { name: 'Short Rib Ragu', price: '$27.00', description: 'Beef short rib, tomato, red wine, cavatelli.' },
      { name: 'Eggplant Parm', price: '$23.00', description: 'Breaded eggplant, ricotta, marinara, mozzarella.' },
      { name: 'Baked Penne', price: '$24.00', description: 'Ricotta, mozzarella, marinara.' },
      { name: 'Gnocchi', price: '$21.00', description: 'Add Meat Sauce +$3' },
      { name: 'Linguine', price: '$20.00', description: 'Marinara.' },
      { name: 'Stuffed Shells', price: '$23.00', description: 'Marinara, mozzarella, ricotta.' },
      { name: 'Penne', price: '$20.00', description: 'Marinara.' },
      { name: 'Tortellini Primavera', price: '$24.00', description: 'Daily fresh vegetables, olive oil, Romano.' },
    ],
  },
  // 🍲 Soup
  {
    title: 'Soup',
    items: [
      { name: 'Lobster Bisque', price: '$10.00', description: '$7 / Cup | $10 / Bowl' },
      { name: 'Soup of the Day', price: '$5.00' },
    ],
  },
  // 🐟 Seafood
  {
    title: 'Seafood',
    items: [
      { name: 'Linguine & Clams', price: '$25.00', description: 'With linguine.' },
      { name: 'Shrimp alla Vodka', price: '$28.00', description: 'Vodka blush, penne.' },
      { name: 'Crab Cake', price: '$29.00', description: 'Capellini, roasted pepper pesto, arugula.' },
      { name: 'Salmon', price: '$28.00', description: 'Mashed potatoes, asparagus, dill pesto, balsamic mustard seeds.' },
      { name: 'Lobster Ravioli', price: '$27.00', description: 'Crab, asparagus, sun-dried tomato, lobster blush sauce.' },
      { name: 'Seafood Lasagna', price: '$30.00', description: 'Crab, shrimp, scallops, ricotta, mozzarella, blush sauce, peppers.' },
      { name: 'Fried Crab Cake', price: '$26.00', description: 'Bay fries, tartar sauce, coleslaw.' },
      { name: 'Mussels Marinara', price: '$24.00', description: 'Tomato, white wine, linguine.' },
    ],
  },
  // 🐔 Chicken Entrees
  {
    title: 'Chicken',
    items: [
      { name: 'Parmigiana', price: '$25.00', description: 'Chicken cutlet, mozzarella, marinara, penne.' },
      { name: 'Petito', price: '$26.00', description: 'Chicken cutlet, spinach, tomato, mozzarella, linguine, garlic, oil.' },
      { name: 'Cacciatore', price: '$25.00', description: 'Chicken, mushrooms, peppers, onions, olives, capers, tomato, penne.' },
      { name: 'Vinnie', price: '$26.00', description: 'Chicken, spinach, peppers, balsamic sauce, penne.' },
    ],
  },
  // 🥩 House Specialties
  {
    title: 'Specialties',
    items: [
      { name: 'Veal Parmigiana', price: '$27.00', description: 'Veal cutlet, mozzarella, marinara, penne.' },
      { name: 'Veal Milanese', price: '$27.00', description: 'Veal cutlet, Romano, arugula, tomato, red onion, radicchio.' },
      { name: 'NY Strip', price: '$36.00', description: 'Roasted potatoes, asparagus, vincotto, steak sauce.' },
    ],
  },
  // 🥪 Chicken Sandwiches
  {
    title: 'Chicken Sandwiches',
    items: [
      { name: 'Chicken Parm Sandwich', price: '$13.00' },
      { name: 'Chicken Cutlet Sandwich', price: '$14.00', description: 'Chicken cutlet, broccoli rabe, roasted peppers, provolone.' },
      { name: 'Buffalo Bob', price: '$13.00', description: 'Breaded chicken, buffalo sauce, bleu cheese.' },
      { name: 'Joe Special Sandwich', price: '$13.00', description: 'Chicken, spinach, roasted peppers, provolone.' },
      { name: 'Chicken Cordon Bleu Sandwich', price: '$13.00', description: 'Chicken, ham, Swiss, ranch.' },
      { name: 'Chicken Marsala Sandwich', price: '$13.00', description: 'Chicken, mushrooms, mozzarella, marsala wine sauce.' },
    ],
  },
  // 🍔 Burgers
  {
    title: 'Burgers',
    items: [
      { name: 'Cheeseburger', price: '$16.00' },
      { name: 'Bacon Cheese Burger', price: '$18.00' },
      { name: 'Hamburger', price: '$12.00' },
      { name: 'Turkey Burger', price: '$16.00' },
    ],
  },
  // 🥖 Hoagies
  {
    title: 'Hoagies',
    items: [
      { name: 'Italian Hoagie', price: '$13.00', description: 'Genoa, capicola, pepper ham, provolone.' },
      { name: 'Tonno Hoagie', price: '$13.00', description: 'Italian oil packed tuna, broccoli rabe, roasted peppers, provolone picante.' },
      { name: 'Tuna Hoagie', price: '$13.00', description: 'Tuna salad, American cheese.' },
      { name: 'Turkey Hoagie', price: '$13.00', description: 'American cheese.' },
      { name: 'American Hoagie', price: '$13.00', description: 'Ham, genoa, American cheese.' },
      { name: 'Roast Beef Hoagie', price: '$13.00', description: 'American cheese.' },
      { name: 'Ham & Cheese Hoagie', price: '$13.00' },
    ],
  },
  // 🍟 Sides
  {
    title: 'Sides',
    items: [
      { name: 'French Fries', price: '$7.00' },
      { name: 'Mozzarella Sticks', price: '$9.00' },
      { name: 'Chicken Wings', price: '$17.00' },
      { name: 'Cheese Fries', price: '$8.50' },
      { name: 'Chicken Fingers', price: '$13.00' },
      { name: 'Mega Fries', price: '$9.00', description: 'American, mozzarella, cheddar and bacon.' },
      { name: 'Cheddar Jalapeno Poppers', price: '$9.00' },
      { name: 'Fried Green Beans', price: '$9.00' },
      { name: 'Side of Broccoli', price: '$4.50' },
    ],
  },
  // 🌟 Seasonal Selections
  {
    title: 'Seasonal Selections',
    items: [
      { name: 'SHRIMP OREGANATA', price: '$12.00', description: 'brick oven roasted shrimp, garlic, breadcrumbs, oregano' },
      { name: 'CRAB STUFFED MUSHROOMS', price: '$15.00', description: 'crab imperial stuffed cremini mushrooms, roasted pepper aioli' },
      { name: 'CHEESESTEAK EGGROLLS', price: '$9.00', description: 'sriracha ranch dipping sauce' },
      { name: 'BURRATA BONHAM', price: '$12.00', description: 'burrata, prosciutto, crostini, extra virgin olive oil, pesto' },
      { name: 'CHOPPED ITALIAN HOAGIE', price: '$15.00', description: 'prosciutto, pepperoni, capicola, genoa salami, hot peppers, lettuce, tomato, onion, burrata' },
      { name: 'SACCHETTI BOSCO', price: '$27.00', description: 'five cheese sachetti, sausage, mushrooms, truffle essence, parmesan cream sauce' },
      { name: 'BASA OSCAR', price: '$30.00', description: 'pan seared basa, lump crab, asparagus, roasted red peppers, bearnaise sauce' },
      { name: 'CREAMY SHRIMP GENOVESE', price: '$28.00', description: 'sauteed shrimp, pesto crema, linguine' },
      { name: 'TRENTON TOMATO PIE', price: '$23.00', description: "18\" crust, mozzarella bottom, chunky tomato sauce top, oregano, pecorino, evoo" },
      { name: 'DRUNKEN GRANDMA PIE', price: '$24.00', description: "16\" square pan pizza, vodka sauce, fresh mozzarella, low-moisture mozzarella, basil" },
    ],
  },
];

/* ------------------------------ COMPONENT ------------------------------ */
export default function MenuPage() {
  // Build nav list including Beverages + Catering
  const navCats = [...menuSections.map((s) => s.title), 'Beverages', 'Catering Services'];

  return (
    <Layout>
      <div className="bg-cafe-cream py-12">
        <div className="cafe-container">
          <h1 className="text-4xl font-medium text-cafe-rose text-center mb-8">Our Menu</h1>
          <p className="text-xl text-center mb-10 text-cafe-lavender max-w-3xl mx-auto">
            All our food is made with fresh, locally sourced ingredients whenever possible. We take pride in serving homemade meals in our historic train station setting.
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {navCats.map((cat) => (
              <Link
                key={cat}
                href={`#${slugify(cat)}`}
                className="px-6 py-2 bg-white shadow-md rounded-md hover:bg-cafe-rose hover:text-white transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Dynamic Menu Sections */}
          {menuSections.map(({ title, items }) => (
            <section key={title} id={slugify(title)} className="mb-16">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
                <h2 className="text-3xl font-medium text-cafe-rose mb-6 text-center">{title}</h2>

                <div className="space-y-6 max-w-2xl mx-auto">
                  {items.map(({ name, price, description }) => (
                    <div key={name}>
                      <div className="flex justify-between flex-wrap gap-2">
                        <h4 className="text-lg font-medium">{name}</h4>
                        <span className="text-cafe-rose whitespace-nowrap">{price}</span>
                      </div>
                      {description && <p className="text-sm text-gray-600">{description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* Beverages (unchanged) */}
          <section id={slugify('Beverages')} className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8 h-full">
              <h2 className="text-3xl font-medium text-cafe-rose mb-6 text-center">Beverages</h2>

              <div className="space-y-4 max-w-md mx-auto">
                {[
                  ['Coffee (Bottomless)', '$2.95'],
                  ['Hot Tea', '$2.50'],
                  ['Fresh Orange Juice', '$3.95'],
                  ['Soft Drinks', '$2.50'],
                  ['Milk', '$2.50'],
                  ['Chocolate Milk', '$2.95'],
                  ['Iced Tea', '$2.50'],
                ].map(([name, price]) => (
                  <div key={name} className="flex justify-between">
                    <h4 className="text-lg font-medium">{name}</h4>
                    <span className="text-cafe-rose">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Catering (unchanged) */}
          <section id={slugify('Catering Services')} className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
              <h2 className="text-3xl font-medium text-cafe-rose mb-6 text-center">Catering Services</h2>
              <p className="text-center mb-8 text-cafe-lavender max-w-2xl mx-auto">
                Let us cater your next event! From breakfast platters to boxed lunches, we offer a variety of options for any occasion.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-medium text-cafe-lavender mb-4">Breakfast Platters</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between">
                      <h4 className="text-lg font-medium">Continental Breakfast</h4>
                      <span className="text-cafe-rose">$9.95/person</span>
                    </div>
                    <p className="text-sm text-gray-600">Assortment of pastries, bagels, fresh fruit and coffee</p>

                    <div className="flex justify-between mt-6">
                      <h4 className="text-lg font-medium">Hot Breakfast</h4>
                      <span className="text-cafe-rose">$12.95/person</span>
                    </div>
                    <p className="text-sm text-gray-600">Scrambled eggs, bacon, sausage, home fries and toast</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-medium text-cafe-lavender mb-4">Lunch Platters</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between">
                      <h4 className="text-lg font-medium">Sandwich Platter</h4>
                      <span className="text-cafe-rose">$11.95/person</span>
                    </div>
                    <p className="text-sm text-gray-600">Assortment of sandwiches, chips and cookies</p>

                    <div className="flex justify-between mt-6">
                      <h4 className="text-lg font-medium">Salad Bar</h4>
                      <span className="text-cafe-rose">$10.95/person</span>
                    </div>
                    <p className="text-sm text-gray-600">Mixed greens with assorted toppings and dressings</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="mb-4 text-cafe-lavender">For more information or to place an order:</p>
                <Link href="tel:856-848-5282" className="btn-outline inline-block px-6 py-2 mr-4">
                  Call: 856-848-5282
                </Link>
                <Link href="mailto:info@woodburystationcafe.com" className="btn-outline inline-block px-6 py-2">
                  Email: info@woodburystationcafe.com
                </Link>
              </div>
            </div>
          </section>

          {/* Footer note */}
          <div className="mt-12 text-center">
            <p className="italic text-sm text-gray-600 mb-6">* Menu items and prices subject to change. Consumer advisory: Consuming raw or undercooked meats may increase your risk of foodborne illness.</p>
            <Link href="/order-online" className="btn-primary inline-block px-8 py-3">
              Order Online
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

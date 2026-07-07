# Vault Comics

> **Note:** This is a **re-upload** of an earlier project so it lives on my personal GitHub profile alongside my other work.

Hey! So this is my first big web project that I built for my university course. It's basically a comic book store website where people can look at comics and add them to a shopping cart. I'm really into comics so I thought it would be cool to make something I'd actually want to use.

I started with just HTML, CSS, and JavaScript because that's all I knew at the time. Later on I learned PHP and added some backend stuff for the contact form. I'm still learning web development so I'll probably keep adding more features as I figure out new things.

## What I Actually Built

So it's got:

- A homepage that shows some featured comics
- A full catalog page with all the comics
- A shopping cart that actually works (this was harder than I thought)
- A checkout page with payment forms (just for demo though)
- A contact page that can send emails
- It works on phones and computers

The shopping cart saves your items even if you close the browser, which I was pretty proud of figuring out.

## The Tech Stuff

I used:

- HTML for the basic structure
- CSS for making it look decent (used CSS Grid and Flexbox which took me forever to understand)
- JavaScript for the interactive stuff like the cart and forms
- PHP for handling emails from the contact form
- LocalStorage to save the cart data

## How to Run This Thing

1. Download all the files
2. If you want the contact form to work, you'll need to either:
   - Set up PHP on your server and change the email address in contact-form-handler.php
   - Or use EmailJS (there's instructions online for that)
   - Or just use the mailto fallback (opens your email app)
3. Open index.html in your browser or use a local server

For local testing, you can use:

```bash
python -m http.server 8000
```

Then go to http://localhost:8000

## File Structure

```
VaultComics/
├── index.html              # Homepage
├── comics.html             # All the comics
├── basket.html             # Shopping cart
├── pay.html                # Checkout page
├── success.html            # Order confirmation
├── aboutus.html            # About page
├── contactus.html          # Contact form
├── contact-form-handler.php # PHP email handler
├── css/
│   └── style.css           # All the styling
├── js/
│   └── script.js           # JavaScript stuff
└── image/
    └── [comic images]      # All the comic covers
```

## The Struggles Were Real

Honestly, this project was way harder than I expected. Here are some things that drove me crazy:

- **Images not loading**: Spent hours trying to figure out why my images weren't showing up. Turns out I had a duplicate CSS link pointing to a file that didn't exist. Classic mistake.

- **Mobile menu**: The hamburger menu for mobile took me forever to get working. I had two JavaScript functions with the same name and they were conflicting with each other.

- **Contact form emails**: Different hosting providers handle emails differently, so I had to set up like three different ways to send emails just to make sure it would work somewhere.

- **CSS Grid**: This was completely new to me and I had to watch so many YouTube tutorials to understand how it works.

- **Shopping cart**: Making the cart persist across browser sessions was actually pretty tricky. localStorage seemed simple until I had to actually use it.

## What I Learned

This project taught me a lot:

- How to structure a multi-page website
- CSS Grid and Flexbox (finally)
- JavaScript for real interactive features
- Basic PHP for handling forms
- How to make things responsive
- Why debugging takes 10x longer than writing the original code

## Future Plans

I want to keep working on this as I learn more:

- Maybe add user accounts so people can save their info
- Better search and filtering
- Real payment processing (PayPal or Stripe)
- Maybe a wishlist feature
- Better mobile experience

## About This Project

This was my first real web development project and I'm actually pretty happy with how it turned out. It took me about 2 weeks working on it in my free time, and I definitely learned more from debugging than from writing the initial code.

The most satisfying part was getting the shopping cart to work smoothly - when someone adds items and they stay there even after refreshing the page, it actually feels like a real website.

Feel free to use this code for learning or as a starting point for your own projects. Just don't judge my JavaScript too harshly, I was still figuring things out!

## About

A comic book e-commerce website built as a university project. Features responsive design, shopping cart functionality, and multiple contact form options.

# Week 10 Studio
### Working with HTML and CSS

### Introduction
Review Monday's slides if you need a refresher on how to creat an html file!

__Before starting: Create a file called index.html__

1. To start, add the `<!DOCTYPE html>` declaration as the very first line of code at the top of the index.html file. Add the `<html>` element below.

2. Below the `<html>` opening tag, add a `<head>` element. Below the `<head>` element, add the `<body>` element.

3. Within the `<head>` tags, add a `<title>` element. Title the website “Whitney Biennial 2024:”.

4. Directly below the opening `<body>` tag, add an `<h1>` that says:

“Better than the Real Thing”

Below that, add an `<h2>` that says:

Mar 27–Sept 5, 2024”

5. Let’s add an info blurb about the Biennial. Between the `<h1>` and first `<h2>` tag, add a `<p>` tag that says:

“The eighty-first edition of the Whitney Biennial—the longest-running survey of contemporary art in the United States—features seventy-one artists and collectives grappling with many of today’s most pressing issues. This Biennial is like being inside a “dissonant chorus," as participating artist Ligia Lewis described it, a provocative yet intimate experience of distinct and disparate voices that collectively probe the cracks and fissures of the unfolding moment."


6. After the `<h2>` tags, add another paragraph  using the `<p>` tag:

“The exhibition’s subtitle, Even Better Than the Real Thing, acknowledges that Artificial Intelligence (AI) is complicating our understanding of what is real, and rhetoric around gender and authenticity is being used politically and legally to perpetuate transphobia and restrict bodily autonomy. These developments are part of a long history of deeming people of marginalized race, gender, and ability as subhuman—less than real. In making this exhibition, we committed to amplifying the voices of artists who are confronting these legacies, and to providing a space where difficult ideas can be engaged and considered.”

7. After the last `<h2>` tag, add a final paragraph that says:

“This Biennial is a gathering of artists who explore the permeability of the relationships between mind and body, the fluidity of identity, and the growing precariousness of the natural and constructed worlds around us. Whether through subversive humor, expressive abstraction, or non-Western forms of cosmological thinking, to name but a few of their methods, these artists demonstrate that there are pathways to be found, strategies of coping and healing to be discovered, and ways to come together even in a fractured time.”

8. Now we should add some images! Above each paragraph, add an `<img>` tag and set its src to be one of the following links:

https://whitneymedia.org/assets/image/827528/large_LITTLEISLAND_GUTPUNCH_Op3_web.jpg
https://whitneymedia.org/assets/image/827466/large_RS10789_Yoon_S_04.jpg
https://whitneymedia.org/assets/image/827510/large_RJ-Jan30-4_Web.jpg

9. The basic website is complete! Now let’s add an image of the Whitney's logo. Below the opening body tag, add an `<img>` tag with the following source:

https://hyperallergic-newspack.s3.amazonaws.com/uploads/2013/05/whitney-identity-640.jpg

10. Below the `<img>` tag, add an `<h3>` that says “Whitney Museum of American Art”

11. The whitney's site has a lot more than just the Biennial info on it. Let’s make a list of some related posts. Beneath the last paragraph, add a `<h4>` tag that says “Related Content”. Underneath that header tag, create an unordered list.

12. The unordered list should have the following four items:

* “David Hammons: Day’s End”
* Jennifer Packer: The Eye Is Not Satisfied With Seeing”
* “The Whitney’s Collection: Selections from 1900 to 1965”
* “Martine Gutierrez: Supremacy”

13. Let’s get the page connected to the rest of the web! In the first paragraph, turn ‘Whitney Biennial’ into a link and have it go to: https://en.wikipedia.org/wiki/Whitney_Biennial.

Make sure to include the target="_blank" attribute so that it opens in a new page.

14. A good webpage has a footer. At the bottom of your body, add a new `<div>` and set its id='contact'. Inside the `<div>`, create a new `<p>` tag and put the following contact information inside of it:

email: admin@whitney.org | phone: 917-555-1098 | address: 99 Gansevoort Street, Lower Manhattan, New York City

15. Inside the contact `<div>`, put `<strong>` opening and closing tags around “email”, “phone”, and “address”.

16. Let’s make the Whitney's logo  a link to the contact section of the webpage. Find the whitney's `<img>` tag, and surround it by opening and closing `<a>` tags. In the `<a>` tag, set href="#contact".

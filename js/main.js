let paintingsForSale = {
    //Black Butler
    bb:
    {
        title: "Black Butler",
        artist: "MIOSH",
        description: "Black Butler is an anime about demon contractions that was released in 2008.The characters being shown are Ciel Phantomhive, the Earl of the Phantomhive family, and Sebastian Michaelis, the head butler of the mansion.",
        image: "pictures/phantohiveC.jpeg",
        price: {
            USD:30.00,
            EUR:27.66,
            GBD:23.52,
        },
        dimensions: {
            width:9.5 ,
            height:13
        },
        medium: "Graphite On Paper",
        style: "Fan Art",
        year: 2017,
        availability: true,
        tags: ["black butler", "anime", "fan art", "ciel & sebastian "],
        numberOfSales: 0,
        shippingInfo: {
            domestic: {
                cost: 20,
                estimatedDelivery: "2-5 business days"
            },
            international: {
                cost: 50,
                estimatedDelivery: "5-10 business days"
            }
        },
        // Method to check if the painting is available for purchase
        isAvailable: function() {
            return this.availability ? "Available" : "Sold out";
        },
        // Method to display the info when hovering over the image
        hoverBB: function(description, size, art,style , year, price, tags) {
            return [
             this.description,
             this.size,
             this.art,
             this.style,
             this.year,
             this.price,
             this.tags,
            ]
        }
    },
    //DONE:Black Butler

    //Ash
    Ash:
    {
        title: "Banana Fish",
        artist: "MISHO",
        description: "-This painting was based off of the anime show Banana Fish, which was released back in 2018. The character shown is the protagonist, Ash Lynx.",
        image: "pictures/ash.jpeg",
        price: {
            USD:20,
            EUD:18.43,
            GBP:15.68,
        },
        dimensions: {
            width: 9.5,
            height: 13,
        },
        medium: "Graphite On Paper",
        style: "Fan Art",
        year: 2018,
        availability: true,
        tags: ["banana fish", "ash lynx", "anime", "mappa studio"],
        shippingInfo: {
            domestic: {
                cost: 25,
                estimatedDelivery: "3-7 business days"
            },
            international: {
                cost: 60,
                estimatedDelivery: "7-14 business days"
            }
        },
        // Method to check if the painting is available for purchase
        isAvailable: function() {
            return this.availability ? "Available" : "Sold out";
        },
        //Method to display items when hovering over the painting
        hoverAsh :function(){
            return [
                this.description,
                this.size,
                this.art,
                this.style,
                this.year,
                this.price,
                this.tags,
            ]
        }
    },
    //DONE:ASH

    //Subaru
    subaru:
    {
        title: "Diabolik Lovers",
        artist: "MISHO",
        description: "-This painting was based off of the anime show Diabolik Lovers, which was released back in 2013. The character shown is one of the 6 vampire brothers, Subaru Sakamaki.",
        image: "pictures/subaru7.jpg",
        price: {
            USD:15,
            EUD:13.82,
            GBP:11.75,
        },
        dimensions: {
            width: 9.5,
            height: 13,
        },
        medium: "Graphite On Paper",
        style: "Fan Art",
        year: 2019,
        availability: true,
        tags: ["diabolik lovers", "subaru sakamaki", "anime", "vampire"],
        shippingInfo: {
            domestic: {
                cost: 25,
                estimatedDelivery: "3-7 business days"
            },
            international: {
                cost: 60,
                estimatedDelivery: "7-14 business days"
            }
        },
        // Method to check if the painting is available for purchase
        isAvailable: function() {
            return this.availability ? "Available" : "Sold out";
        },
        //Method to display items when hovering over the painting
        hoverSubaru :function(){
            return [
                this.description,
                this.size,
                this.art,
                this.style,
                this.year,
                this.price,
                this.tags,
            ]
        }
    },
    //DONE:Subaru

    //Who Am I?
    wai:
    {
        title: "Who Am I?",
        artist: "MISHO",
        description: "-This painting was based off of MISHO's imagination, in which the painting doesn't show any emotion, it's a mystery that shall never be resolved.",
        image: "pictures/depressedGuy4.jpg",
        price: {
            USD:15,
            EUD:13.82,
            GBP:11.75,
        },
        dimensions: {
            width: 9.5,
            height: 13,
        },
        medium: "Graphite On Paper",
        style: "Personal Style",
        year: 2019,
        availability: true,
        tags: ["deep", "who am i", "original", "MISHO"],
        shippingInfo: {
            domestic: {
                cost: 25,
                estimatedDelivery: "3-7 business days"
            },
            international: {
                cost: 60,
                estimatedDelivery: "7-14 business days"
            }
        },
        // Method to check if the painting is available for purchase
        isAvailable: function() {
            return this.availability ? "Available" : "Sold out";
        },
        //Method to display items when hovering over the painting
        hoverWAI :function(){
            return [
                this.description,
                this.size,
                this.art,
                this.style,
                this.year,
                this.price,
                this.tags,
            ]
        }
    },
    //DONE:WHO AM I?

    //Cat Guy
    catguy:
    {
        title: "Cat Guy",
        artist: "MISHO",
        description: "-This painting was based off of the original picture on Pinterest that MISHO had liked so much, that she drew it despite it being everywhere. ",
        image: "pictures/catGuy1.jpg",
        price: {
            USD:20,
            EUD:18.43,
            GBP:15.67,
        },
        dimensions: {
            width: 9.5,
            height: 13,
        },
        medium: "Graphite On Paper",
        style: "Fan Art",
        year: 2018,
        availability: true,
        tags: ["Pinterest", "black cat", "famous", "MISHO"],
        shippingInfo: {
            domestic: {
                cost: 25,
                estimatedDelivery: "3-7 business days"
            },
            international: {
                cost: 60,
                estimatedDelivery: "7-14 business days"
            }
        },
        // Method to check if the painting is available for purchase
        isAvailable: function() {
            return this.availability ? "Available" : "Sold out";
        },
        //Method to display items when hovering over the painting
        hoverCatG :function(){
            return [
                this.description,
                this.size,
                this.art,
                this.style,
                this.year,
                this.price,
                this.tags,
            ]
        }
    },
    //DONE:Cat Guy

    //Original Artwork

    //Sky Dancers~
    skydancer:
    {
        title: "Sky Dancers~",
        artist: "MISHO",
        description: "-This painting was based off of MISHO's imagination, in which the painting looks cute and innocent, but in reality, it's a happy man who is being carried by death to his demise.",
        image: "pictures/rabbit6.jpg",
        price: {
            USD:15,
            EUD:13.82,
            GBP:11.75,
        },
        dimensions: {
            width: 9.5,
            height: 13,
        },
        medium: "Graphite On Paper",
        style: "Personal Style",
        year: 2022,
        availability: true,
        tags: ["deep", "dark", "cute", "death"],
        shippingInfo: {
            domestic: {
                cost: 25,
                estimatedDelivery: "3-7 business days"
            },
            international: {
                cost: 60,
                estimatedDelivery: "7-14 business days"
            }
        },
        // Method to check if the painting is available for purchase
        isAvailable: function() {
            return this.availability ? "Available" : "Sold out";
        },
        //Method to display items when hovering over the painting
        hoverRabbits :function(){
            return [
                this.description,
                this.size,
                this.art,
                this.style,
                this.year,
                this.price,
                this.tags,
            ]
        }
    },
    //DONE:Sky Dancers~

    //The Road
    road:
    {
        title: "The Road",
        artist: "MISHO",
        description: "-This painting can be described by one word, random. MISHO had no plan and went for anything that crossed her mind while working on this artwork, what magnificent reults we have!",
        image: "pictures/frogFace11.jpg",
        price: {
            USD:25,
            EUD:23.03,
            GBP:15.67,
        },
        dimensions: {
            width: 9.5,
            height: 13,
        },
        medium: "Graphite On Paper",
        style: "Personal Style",
        year: 2023,
        availability: true,
        tags: ["random", "abstract","MISHO"],
        shippingInfo: {
            domestic: {
                cost: 25,
                estimatedDelivery: "3-7 business days"
            },
            international: {
                cost: 60,
                estimatedDelivery: "7-14 business days"
            }
        },
        // Method to check if the painting is available for purchase
        isAvailable: function() {
            return this.availability ? "Available" : "Sold out";
        },
        //Method to display items when hovering over the painting
        hoverff :function(){
            return [
                this.description,
                this.size,
                this.art,
                this.style,
                this.year,
                this.price,
                this.tags,
            ]
        }
    },
    //DONE:The Road

    //Fantasy
    fantasy:
    {
        title: "Fantasy",
        artist: "MISHO",
        description: "-This painting was based off of MISHO's imagination, in which the painting doesn't show any emotion, it's a mystery that shall never be resolved.",
        image: "pictures/fantasy10.jpg",
        price: {
            USD:35,
            EUD:32.25,
            GBP:27.42,
        },
        dimensions: {
            width: 9.5,
            height: 13,
        },
        medium: "Graphite On Paper",
        style: "Personal Style",
        year: 2020,
        availability: true,
        tags: ["deep", "fantasy", "tragidia", "MISHO"],
        shippingInfo: {
            domestic: {
                cost: 25,
                estimatedDelivery: "3-7 business days"
            },
            international: {
                cost: 60,
                estimatedDelivery: "7-14 business days"
            }
        },
        // Method to check if the painting is available for purchase
        isAvailable: function() {
            return this.availability ? "Available" : "Sold out";
        },
        //Method to display items when hovering over the painting
        hoverf :function(){
            return [
                this.description,
                this.size,
                this.art,
                this.style,
                this.year,
                this.price,
                this.tags,
            ]
        }
    },
    //DONE:Fantasy

    //The Nebula
    nebula:
    {
        title: "The Nebula",
        artist: "MISHO",
        description: "-This painting was done for a competition MISHO had in her freshman year in high school. It won and was placed in the school's art gallery, she got it back at the end of the year.",
        image: "pictures/star2.jpg",
        price: {
            USD:35,
            EUD:32.25,
            GBP:27.42,
        },
        dimensions: {
            width: 39.4,
            height: 19.7,
        },
        medium: "Watercolor Painting",
        style: "Personal Style",
        year: 2018,
        availability: true,
        tags: ["deep", "night-sky", "nature", "MIOSH"],
        shippingInfo: {
            domestic: {
                cost: 25,
                estimatedDelivery: "3-7 business days"
            },
            international: {
                cost: 60,
                estimatedDelivery: "7-14 business days"
            }
        },
        // Method to check if the painting is available for purchase
        isAvailable: function() {
            return this.availability ? "Available" : "Sold out";
        },
        //Method to display items when hovering over the painting
        hoverNebula :function(){
            return [
                this.description,
                this.size,
                this.art,
                this.style,
                this.year,
                this.price,
                this.tags,
            ]
        }
    },
    //DONE:Nebula

    //Fairy
    fairy:
    {
        title: "The Fairy",
        artist: "MISHO",
        description: "-This painting was all from MISHO's imagination and creativity!",
        image: "pictures/fairy9.jpg",
        price: {
            USD:15,
            EUD:13.84,
            GBP:11.78,
        },
        dimensions: {
            width: 9.5,
            height: 13,
        },
        medium: "Graphite on Paper",
        style: "Personal Style",
        year: 2022,
        availability: true,
        tags: ["fairy", "fantasy","MISHO"],
        shippingInfo: {
            domestic: {
                cost: 25,
                estimatedDelivery: "3-7 business days"
            },
            international: {
                cost: 60,
                estimatedDelivery: "7-14 business days"
            }
        },
        // Method to check if the painting is available for purchase
        isAvailable: function() {
            return this.availability ? "Available" : "Sold out";
        },
        //Method to display items when hovering over the painting
        hoverFairy :function(){
            return [
                this.description,
                this.size,
                this.art,
                this.style,
                this.year,
                this.price,
                this.tags,
            ]
        }
    },
    /*DONE:Fairy*/

    /*Kim Taehyung*/
    taehyung:
    {
        title: "BTS:Kim Taehyung",
        artist: "MISHO",
        description: "-This is a painting of the idol Kim Taehyung, a member of the South Korean K-POP group BTS. This painting is from a real picture of him online in one of his concerts.",
        image: "pictures/tae8.jpg",
        price: {
            USD:40,
            EUD:36.85,
            GBP:31.39,
        },
        dimensions: {
            width: 12,
            height: 15,
        },
        medium: "Graphite On Paper",
        style: "Fan Art",
        year: 2020,
        availability: true,
        tags: ["Kim Taehyung", "BTS","K-POP","Famous","Idol","Celebrity","MIOSH"],
        shippingInfo: {
            domestic: {
                cost: 25,
                estimatedDelivery: "3-7 business days"
            },
            international: {
                cost: 60,
                estimatedDelivery: "7-14 business days"
            }
        },
        // Method to check if the painting is available for purchase
        isAvailable: function() {
            return this.availability ? "Available" : "Sold out";
        },
        //Method to display items when hovering over the painting
        hoverTae :function(){
            return [
                this.description,
                this.size,
                this.art,
                this.style,
                this.year,
                this.price,
                this.tags,
            ]
        }
    },
    /*DONE:Kim Taehyung*/ 

    /*Messi*/
    messi:
    {
        title: "Lionel Messi",
        artist: "MISHO",
        description: "-This is a painting of the famous soccer player from Argentina, Messi. This painting is influenced from an online picture of him.",
        image: "pictures/messi4.jpg",
        price: {
            USD:25,
            EUD:23.03,
            GBP:19.62,
        },
        dimensions: {
            width: 9.5,
            height: 13,
        },
        medium: "Graphite On Paper",
        style: "Fan Art",
        year: 2016,
        availability: true,
        tags: ["Lionel Messi", "Soccer","Famous","World Cup","Celebrity","MISHO"],
        shippingInfo: {
            domestic: {
                cost: 25,
                estimatedDelivery: "3-7 business days"
            },
            international: {
                cost: 60,
                estimatedDelivery: "7-14 business days"
            }
        },
        // Method to check if the painting is available for purchase
        isAvailable: function() {
            return this.availability ? "Available" : "Sold out";
        },
        //Method to display items when hovering over the painting
        hoverMessi :function(){
            return [
                this.description,
                this.size,
                this.art,
                this.style,
                this.year,
                this.price,
                this.tags,
            ]
        }
    },
    /*Jimin */
    jimin:
    {
        title: "BTS:Park Jimin",
        artist: "MISHO",
        description: "-This is a painting of the idol Park Jimin, a member of the South Korean K-POP group BTS. This painting is from a real picture of him online in one of his fan signs.",
        image: "pictures/jimin5.jpg",
        price: {
            USD:20,
            EUD:18.43,
            GBP:15.70,
        },
        dimensions: {
            width: 12,
            height: 15,
        },
        medium: "Graphite On Paper",
        style: "Fan Art",
        year: 2019,
        availability: true,
        tags: ["Park Jimin", "BTS","K-POP","Famous","Idol","Celebrity","MISHO"],
        shippingInfo: {
            domestic: {
                cost: 25,
                estimatedDelivery: "3-7 business days"
            },
            international: {
                cost: 60,
                estimatedDelivery: "7-14 business days"
            }
        },
        // Method to check if the painting is available for purchase
        isAvailable: function() {
            return this.availability ? "Available" : "Sold out";
        },
        //Method to display items when hovering over the painting
        hoverJimin :function(){
            return [
                this.description,
                this.size,
                this.art,
                this.style,
                this.year,
                this.price,
                this.tags,
            ]
        }
    },
};
//Display on HTML

var BlackButlerDisplay=document.getElementById('displayBB');
displayBB.textContent=paitingsForSale.bb.year;
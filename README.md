# We know what you did - An analysis on Colombia congressman financial assests 

## The history

Cuestion Publica is an independent journalist organization based in Colombia, focused on investigations concerning interactions between politics and economics, and more accurately in public topics such as health system management, public wealth, laboral laws, social conflicts and minorities. Their interest in such topics is guided to achieve public political control on  governments and their members. Due to this interest, the “We know what you did” project was born, as an initiative to obtain political control on the representatives’ wealth. Aiming, for instance, to identify trends, features outliers in the financial assets of the congress members, and furthermore to identify possible corruptions cases. Having these objectives in mind, we, as a team, consider Visual Analytics as the right approach to help Cuestion Publica fulfill their purpose, as we can provide a common language using the Tamara Munzner framework, and thanks to the enhancement that visualization produces in the human analysis capabilities.

![cuestion publica](https://github.com/cjcarvajal/cuestion-publica-analysis/blob/master/resources/big_logo.jpeg)

In Colombia, the DIAN (Dirección de Impuestos y Aduanas Nacionales) is an official agency which controls and manages taxes on citizens and companies for incomes and goods,  recollects tariffs for the flow of goods in and out of a country and manages taxes on  betting games [2]. DIAN is under the direction of a bigger official entity called Ministerio de Hacienda which is itself under the control of the Presidency. The DIAN is responsible of the country’s fiscal health and protecting the public economic order through the management and the control compliance with tax obligations. Finally, it enforces penalties and fines to those who don’t comply to the rules. To implement this control, the entity has standardized a process forcing individuals or companies with incomes coming from economic activities in Colombia, or those who possess assets (such as real estate properties or vehicles for instance). This categorization also includes citizens and companies from other countries. The process is known as declaración de renta (DDR) in which the aforementioned shall fill a form stating which goods they possess, how much they received as income and how much they have spent [3].

Public officers, as members of the government, are not exempt from this process, and in this case,  the document is most of the time required by other entities, such as journalists, to exercise a political control. Cuestion Publica has required the DDR from twenty nine congress members in order to perform the aforementioned political control.

Cuestion Publica achieved the recollection of DDR for some of the congress members, such data is the input of this analysis.


## The users

We have identified two kinds of users: the client and the website users.
Cuestion Publica owns a website [5] where the team regularly updates the public on ongoing investigations,  as well as giving public access to documents recollected on such investigations. Cuestion Publica (CP) is run by three investigation journalists with some tech knowledge, as they recognize some terms as Javascript, programming languages and data cleaning. These three journalists are the clients, their expectation is to present a trend in the congressmen’s wealth, looking to identify sudden rises in the incomes or properties. 

The website users are our other kind of users. They are an heterogeneous group as we can’t suppose any tech knowledge or even basic financial terminology knowledge. The website users, which themselves are ‘clients’ of CP, represent the final user, because even if the CP staff can understand a visualization containing financial, fiscal and tax terms, the page visitors are the ones who must be capable to understand the visualization and formulate their own insights.

As the final product must be displayed on the CP website (according to the staff requirements), our visualization must meet some non functional requirements such as low response times, and as mentioned above, the terms must be easy to understand for a non expert on fiscal jargon.


## What

It's important to understand some basic concepts about the DDR:

* Patrimonio Liquido: Represents a person finantial assets, including money in bank accounts, real estate, vehicles, stock shares, investments subtracting the debts and other obligations, in our analysis this item is AKA wealth (**riqueza** in spanish).
* Rentas: Represents the earns and incomes for a person, for example the salary. AKA **earns** (ganancia) in our analysis.
* Impuesto a Cargo: Represents the amount of money a person should pay as tax, it's calculated over the earns. In practice, some discounts are applied so this value represent the tax before discounts so in our analysis is AKA **impuesto sin descuento**.


## Why

We define some tasks that lead our analysis:

* Summarize distribution on the recived DDR, this is to present the number of DDR received by year and by congresman, so the user may be able to see the years with more and less DDR's and so, the congressman that give more and less DDR's.
* Present and compare trends: Visualize the trends on the average for Patrimonio Liquido, Income and Taxes or by their alias **Riqueza**, **Ganancia** and **Impuesto sin descuentos**, the user should be able to identify common behoaviors on this variables, and locate sudden changes in the trend. This task is extended to the wealth of each congressman.
* Identify and compare (present) outliers on the relation between the earns of one year and the wealth of the next one. According to the tax regulations, a person declared it's earns on one year and then, this assest became wealth, so the next years is not necessary to declare them again. The earns naturally are expended in several things as food, transportation or health, but with the congresman salary, it may be strange that all the earns be expended. According to this task, the user should be able to identify, and browse the congressman with high values of earns not transformed in wealth.

## How

![vis 1](https://bit.ly/2QFJUy9)
![vis 2](https://bit.ly/2Qd37aG)
![vis 3](https://bit.ly/2SmKZI0)

## Insights
## The team

* Carlos Javier Carvajal [@CHARLESNIKOV](https://twitter.com/CHARLESNIKOV?lang=en) | [Check my blog here](https://leantechblog.wordpress.com/) 
* Monica Marcela Carvajal [@MoniMCarva](https://twitter.com/MoniMCarva?lang=en)
* Marwan Mehenni

## How do we build this?

We use web programming technologies:

* [Javascript](https://www.w3schools.com/js/)
* [D3 version 5](https://d3js.org/)
* [css](https://www.w3schools.com/Css/)
* [html](https://www.w3schools.com/html/)

Some of the graphics are embeded and were made using [PowerBi](https://powerbi.microsoft.com/en-us/).

## Related links




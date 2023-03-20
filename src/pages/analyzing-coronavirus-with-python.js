import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <Head>
        <title>Analyzing Coronavirus with Python (COVID-19) - NeuralNine</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />
      </Head>
      <NavBar />
      <section className="bg-[#0e0e0e] text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 md:py-16 md:px-10 lg:px-32 xl:max-w-5xl">
          <h1 className="text-2xl font-bold leading-none sm:text-4xl">
            <span className="text-[#FF7825]">
              {" "}
              ANALYZING CORONAVIRUS WITH PYTHON (COVID-19){" "}
            </span>
          </h1>
          <hr class="w-full h-0.5 mx-auto  bg-[#ccc] border-0 rounded my-4" />
          <Image
            className="inline w-full"
            width={1024}
            height={1000}
            alt="img"
            src="https://media.discordapp.net/attachments/807562739324157962/1082969834863734915/corona.png?width=999&height=994"
          ></Image>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
            <div className="flex md:space-x-2">
              <p className="text-sm">
                <span className="fa-regular fa-clock text-gray-300">
                  &nbsp;{" "}
                </span>
                29. March 2020 -
              </p>
              <p className="text-sm">
                <span className="fa-regular fa-folder text-gray-300">
                  &nbsp;{" "}
                </span>
                Data Science / Programmming / Pythong Programming -
              </p>
              <p className="text-sm">
                <span className="fa-regular fa-comment text-gray-300">
                  &nbsp;{" "}
                </span>
                2 Comments
              </p>
            </div>
          </div>
          <hr class="w-full h-0.5 mx-auto  bg-[#ccc] border-0 rounded my-4" />
        </div>
      </section>
      <section className="bg-[#0e0e0e] text-gray-100">
        <div className="container flex flex-col mx-auto min-h-[400px] text-justify">
          {/* Introduction */}
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-10 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-16 text-[#FF7825] text-center">
              Introduction
            </h2>
            <p className="mt-4 mb-2 text-md">
              Chances are, you are in quarantine right now and the reason for
              that is the coronavirus, also known as COVID-19. Now I am not a
              medical expert, nor am I a political expert or an expert for
              societal issues. So I don’t want to talk too much about the
              effects that the virus has or might have in the future on those
              levels. In this blog post I want to show you how you can analyze
              the coronavirus from a mathematical and statistical perspective in
              Python, using data science. We are going to visualize the actual
              numbers and also make some simulations and estimations of the
              future development of the virus.
            </p>
          </div>
          {/* Loading And Preparing The Data */}
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-14 text-[#FF7825] text-center">
              Loading And Preparing The Data
            </h2>

            <p className="mt-4 mb-2 text-md">
              Before we can actually do some analysis of the virus, we will need
              to get some recent data and structure it in a way in which we can
              work with it. For this you can pick any data source you like. You
              could even go to websites and just web scrape the data from there.
              However, I we are going to use the datasets of the Humanitarian
              Data Exchange, since they pack accurate and current data into CSV
              files.
            </p>
            <p className="mt-4 mb-2 text-md">Datasets:</p>
            <p className="mt-4 mb-2 text-md">
              In particular we are going to download the first three files,
              which include data about confirmed cases, deaths and recoveries.
              We place them into the same directory of our Python script. The
              two libraries that we are going to need are Pandas and Matplotlib.
              So we are going to import them now.
            </p>
            <div className="mt-4 mb-8 text-md">
              <pre>
                <code>
                  <p>
                    <span className="text-yellow-200">import</span> pandas{" "}
                    <span className="text-yellow-200">as</span> pd
                  </p>
                  <p>
                    <span className="text-yellow-200">import</span>{" "}
                    matplotlib.pyplot{" "}
                    <span className="text-yellow-200">as</span> plt
                  </p>
                </code>
              </pre>
            </div>
            <p className="mt-4 mb-8 text-md">
              After that we can load the CSV files into our script with Pandas
              and then display their structure.
            </p>
            <div className="mt-4 mb-8 text-md">
              <pre>
                <code>
                  <span>{`confirmed = pd.read_csv('covid19_confirmed.csv')`}</span>
                  <p>{`deaths = pd.read_csv('covid19_deaths.csv')`}</p>
                  <p>{`recovered = pd.read_csv('covid19_recovered.csv')`}</p>
                  <br></br>
                  <p>
                    <span className="text-yellow-200">print</span>
                    (confirmed.head())
                  </p>
                </code>
              </pre>
            </div>
            <p className="mt-4 mb-8 text-md">The output looks like that:</p>
            <div className="mt-4 mb-8 text-md">
              <pre>
                <table>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Province/State</th>
                      <th>Country/Region</th>
                      <th>Lat</th>
                      <th>3/26/20</th>
                      <th>3/27/20</th>
                      <th>3/28/20</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0</td>
                      <td>NaN</td>
                      <td>Afghanistan</td>
                      <td>33.0000</td>
                      <td>94</td>
                      <td>110</td>
                      <td>110</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>NaN</td>
                      <td>Albania</td>
                      <td>41.1533</td>
                      <td>174</td>
                      <td>186</td>
                      <td>197</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>NaN</td>
                      <td>Algeria</td>
                      <td>28.0339</td>
                      <td>367</td>
                      <td>409</td>
                      <td>454</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>NaN</td>
                      <td>Andorra</td>
                      <td>42.5063</td>
                      <td>224</td>
                      <td>267</td>
                      <td>308</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>NaN</td>
                      <td>Angola</td>
                      <td>-11.2027</td>
                      <td>4</td>
                      <td>4</td>
                      <td>5</td>
                    </tr>
                  </tbody>
                </table>
              </pre>
            </div>
            <p className="mt-4 mb-8 text-md">
              As you can see, we have some initial columns including data like
              the country or the region and the province or the state. Then
              after the first four columns we have the dates and the respective
              confirmed cases (or deaths or recoveries) for that day.
            </p>

            <p className="mt-4 mb-8 text-md">
              For reasons of simplicity we are going to drop the
              ‘Province/State’ column and add up the values of all rows of the
              same country. Also we are going to get rid of the ‘Lat’ and the
              ‘Long’ columns, which are the coordinates. After that we also want
              to transpose the data frame. This means we want to have the dates
              as rows and the countries as columns
            </p>
            <div className="mt-4 mb-8 text-md">
              <pre>
                <code>
                  <p>{`confirmed = confirmed.drop(['Province/State', 'Lat', 'Long'], axis=1)`}</p>
                  <p>{`deaths = deaths.drop(['Province/State', 'Lat', 'Long'], axis=1)`}</p>
                  <p>{`recovered = recovered.drop(['Province/State', 'Lat', 'Long'], axis=1)`}</p>
                  <br></br>
                  <p>{`confirmed = confirmed.groupby(confirmed['Country/Region']).aggregate('sum')`}</p>
                  <p>{`deaths = deaths.groupby(deaths['Country/Region']).aggregate('sum')`}</p>
                  <p>{`recovered = recovered.groupby(recovered['Country/Region']).aggregate('sum')`}</p>
                  <br></br>
                  <p>confirmed = confirmed.T</p>
                  <p>deaths = deaths.T</p>
                  <p>recovered = recovered.T</p>
                </code>
              </pre>
            </div>
          </div>
          {/* Calculating Key Statistics */}
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-14 text-[#FF7825] text-center">
              Calculating Key Statistics
            </h2>
            <p className="mt-4 mb-2 text-md">
              With the data we now have, we can calculate a lot of different
              additional values. For example, since we have the deaths and the
              confirmed cases, we can calculate the death rate by country. The
              same can be done with recoveries. Also, looking at the confirmed
              cases, we can look back one day and calculate the growth rate of
              both deaths and confirmed cases. And last but not least we can
              also calculate the number of active cases by subtracting the
              deaths and recoveries from the confirmed cases.
            </p>
          </div>
          {/* Python Code For Calculating Statistics */}
          <div className="flex flex-col w-full p-6 lg:w-4/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <div className="text-md ">
              <pre>
                <code>
                  <p>new_cases = confirmed.copy()</p>
                  <br></br>
                  <p>
                    <span className="text-yellow-200">for</span> day{" "}
                    <span className="text-yellow-200">in</span> range(1,
                    len(confirmed)):
                  </p>
                  <p>
                    &nbsp;{"  "}new_cases.iloc[day] = confirmed.iloc[day] -
                    confirmed.iloc[day - 1]
                  </p>
                  <br></br>
                  <p>growth_rate = confirmed.copy()</p>
                  <br></br>
                  <p>
                    <span className="text-yellow-200">for</span> day{" "}
                    <span className="text-yellow-200">in</span> range(1,
                    len(confirmed)):
                  </p>
                  <p>
                    &nbsp;{"  "}growth_rate.iloc[day] = (new_cases.iloc[day] /
                    confirmed.iloc[day - 1]) * 100
                  </p>
                  <br></br>
                  <p>active_cases = confirmed.copy()</p>
                  <br></br>
                  <p>
                    <span className="text-yellow-200">for</span> day{" "}
                    <span className="text-yellow-200">in</span> range(0,
                    len(confirmed)):
                  </p>
                  <p>
                    &nbsp;{"  "}active_cases.iloc[day] = confirmed.iloc[day] -
                    deaths.iloc[day] - recovered.iloc[day]
                  </p>
                  <br></br>
                  <p>overall_growth_rate = confirmed.copy()</p>
                  <br></br>
                  <p>
                    <span className="text-yellow-200">for</span> day{" "}
                    <span className="text-yellow-200">in</span> range(1,
                    len(confirmed)):
                  </p>
                  <p>
                    &nbsp;{"  "}overall_growth_rate.iloc[day] =
                    ((active_cases.iloc[day] - active_cases.iloc[day-1]) /
                    active_cases.iloc[day - 1]) * 100
                  </p>
                  <br></br>
                  <p>death_rate = confirmed.copy()</p>
                  <br></br>
                  <p>
                    <span className="text-yellow-200">for</span> day{" "}
                    <span className="text-yellow-200">in</span> range(0,
                    len(confirmed)):
                  </p>
                  <p>
                    &nbsp;{"  "}death_rate.iloc[day] = (deaths.iloc[day] /
                    confirmed.iloc[day]) * 100
                  </p>
                </code>
              </pre>
            </div>
          </div>
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <p className="mb-2 text-md">
              Don’t be confused because of the amount of code. We are doing the
              almost same thing over and over again. We are just making a copy
              of the confirmed cases data frame and then changing its content
              with the formula needed for the respective values. For the death
              rate, we just divide the amounts of deaths by the amounts of
              confirmed cases and multiply the result by 100. For statistics,
              where we need to look back one day to do some calculations (i.e.
              growth rate), we start the loop at index one.
            </p>
            <p className="mt-4 mb-2 text-md">
              One thing that is essential here is that you use the copy function
              and don’t just assign the data frame. Because otherwise you will
              pass a reference to it and when you change the new data frame, you
              will also change the original.
            </p>
          </div>
          {/* Making Estimations */}
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-14 text-[#FF7825] text-center">
              Making Estimations
            </h2>

            <p className="mt-4 mb-2 text-md">
              Another thing we can now do is make some estimations and do
              further calculations based on them. Notice that these estimations
              don’t have to represent reality. They are just numbers that we
              think might be realistic. For example, some experts say that 5% of
              coronavirus patients will need a hospital bed, because their
              infection will be severe. Based on that number, we could calculate
              how much hospital beds will be needed over time and when the
              capacities of the individual countries will be exhausted.
            </p>
            <div className="mt-4 mb-8 text-md">
              <pre>
                <code>
                  <p>hospitalization_rate_estimate = 0.05</p>
                  <p>hospitalization_needed = confirmed.copy()</p>
                  <br></br>
                  <p>
                    <span className="text-yellow-200">for</span> day{" "}
                    <span className="text-yellow-200">in</span> range(0,
                    len(confirmed)):
                  </p>
                  <br></br>
                  <p>
                    hospitalization_needed.iloc[day] = active_cases.iloc[day] *
                    hospitalization_rate_estimate
                  </p>
                </code>
              </pre>
            </div>
            <p className="mt-4 mb-8 text-md">
              The mystery of Italy’s rising death rate might also be analyzed
              with estimations. Of course the death rate increases when the
              capacities of the health care system are exhausted. But another
              reason for an increasing death rate in the statistics could be
              that way more people are infected than tested and confirmed. We
              could have ten times more cases than we know about. But we will
              almost certainly find out about every death. Thus the death rate
              in the statistics will be higher than in reality. Here we can work
              with the estimated death rate. Most experts say that COVID-19 has
              a death rate between 2-4%. If that is true, we could use that
              number and reverse engineer the amount of actual infected people
              in countries like Spain or Italy.
            </p>
            <div className="mt-4 mb-8 text-md">
              <pre>
                <code>
                  <p>
                    estimated_death_rate ={" "}
                    <span className="text-red-400">0.03</span>
                  </p>
                  <p>
                    <span className="text-yellow-200">print</span>
                    {`(deaths['Italy'].tail()[4] / estimated_death_rate)`}
                  </p>
                </code>
              </pre>
            </div>
            <p className="mt-4 mb-4 text-md">
              In this case we assume a mortality rate of 3% and the print
              statement gives us the estimated number of people that are
              actually infected.
            </p>
          </div>
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-14 text-[#FF7825] text-center">
              Visualizing The Data
            </h2>

            <p className="mt-4 mb-8 text-md">
              Now let us get into some visualizations to see what this data
              actually looks like. First we are going to plot the total
              confirmed cases for multiple countries.
            </p>
            <div className="mt-4 mb-8 text-md">
              <pre>
                <code>
                  <p>ax = plt.subplot()</p>
                  <p>{`ax.set_facecolor('black')`}</p>
                  <p>{`ax.figure.set_facecolor('#121212')`}</p>
                  <p>{`ax.tick_params(axis='x', colors='white')`}</p>
                  <p>{`ax.tick_params(axis='y', colors='white')`}</p>
                  <p>{`ax.set_title('COVID-19 - Total Confirmed Cases', color='white')`}</p>
                  <p>{`ax.legend(loc="upper left")`}</p>
                  <br></br>
                  <p>{`countries = ['Austria', 'Italy', 'US', 'Spain', 'China', 'Germany', 'India']`}</p>
                  <br></br>
                  <p>for country in countries:</p>
                  <p>confirmed[country][0:].plot(label = country)</p>
                  <br></br>
                  <p>{`plt.legend(loc='upper left')`}</p>
                  <p>plt.show()</p>
                </code>
              </pre>
            </div>
            <p className="mt-4 text-md">The result is the following:</p>
          </div>
          {/* Output Graph Image */}
          <div className="flex flex-col w-full p-6 lg:w-4/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <div className="text-md mx-auto">
              <Image
                className=""
                width={1024}
                height={1545}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1087313902024536164/confirmed_cases-1024x545.png?width=1024&height=545"
              ></Image>
            </div>
          </div>
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <p className="mb-2 text-md">
              You can see that most coutries had almost no cases in January and
              February but skyrocketed in March. On the other side you can see
              China, which had its exponential growth in January and February
              and barely gets any new cases anymore. It’s up to experts to
              analyze and predict if such a curve can be expected in the rest of
              the world. I personally don’t see that happening that fast.
            </p>
            <p className="mt-8 mb-2 text-md">
              Feel free to insert other data frames like deaths and recoveries.
              I am not going to plot all of these here, since it would just be
              annoying. Run the code yourself. However, there are certain
              statistics that are better plotted in a different way. For example
              the death rates or the growth rates. For those it makes more sense
              to plot one country at a time and to use bar charts.
            </p>
            <div className="mt-16 mb-8 text-md">
              <pre>
                <code>
                  <p>{`countries = ['Austria', 'Italy', 'US', 'China']`}</p>
                  <br></br>
                  <p>for country in countries:</p>
                  <p>
                    &nbsp;{"  "}
                    {`ax = plt.subplot()`}
                  </p>
                  <p>
                    &nbsp;{"  "}
                    {`ax.set_facecolor('black')`}
                  </p>
                  <p>
                    &nbsp;{"  "}
                    {`ax.figure.set_facecolor('#121212')`}
                  </p>
                  <p>
                    &nbsp;{"  "}
                    {`ax.tick_params(axis='x', colors='white')`}
                  </p>
                  <p>
                    &nbsp;{"  "}
                    {`ax.tick_params(axis='y', colors='white')`}
                  </p>
                  <p>
                    &nbsp;{"  "}
                    {`ax.set_title(f'COVID-19 - Overall Active Growth Rate [{country}]', color='white')`}
                  </p>
                  <p>
                    &nbsp;{"  "}
                    {`overall_growth_rate[country][10:].plot.bar()`}
                  </p>
                  <p>
                    &nbsp;{"  "}
                    {`plt.show()`}
                  </p>
                </code>
              </pre>
            </div>
            <p className="mt-4 text-md">
              Here we visualize the overall active cases growth rate. Meaning
              the growth rate of the confirmed cases minus the deaths and the
              recoveries. Notice that we start visualizing from day ten, in
              order to skip some of the initial days.
            </p>
          </div>
          {/* Output Graph Image */}
          <div className="flex flex-col w-full p-6 lg:w-4/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <div className="text-md mx-auto">
              <Image
                className="py-5"
                width={1024}
                height={1545}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1087345977221980252/italy_growth-1024x573.png?width=1024&height=534"
              ></Image>
            </div>
            <p className="my-14 text-md lg:w-3/5 mx-auto">
              For most countries, the chart will look pretty similar to this
              one. We have a high spike in the growth rate at the beginning and
              then it slowly gets smaller. Notice however that this is still a
              positive growth rate. Also notice that the growth rate on the
              right is still around 10%.
            </p>
            <div className="text-md mx-auto">
              <Image
                className="py-5"
                width={1024}
                height={1545}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1087346721903874048/china_growth-1024x577.png?width=1024&height=434"
              ></Image>
            </div>
            <p className="mt-8 text-md lg:w-3/5 mx-auto">
              In very few countries like China, you can actually see a negative
              growth rate, which means that not only are people getting sick
              slower but that the number of active cases is decreasing every
              day.
            </p>
          </div>
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-14 text-[#FF7825] text-center">
              Running Simulations
            </h2>
            <p className="my-8 text-md">
              Last but not least, we can run some simulations. Let’s say we want
              to see what would happen if we had a constant growth rate of 10%
              in Italy from today on. What would the next 40 days look like?
            </p>
            <div className="mt-4 mb-4 text-md">
              <pre>
                <code>
                  <p>{`simulation_growth_rate = 0.1`}</p>
                  <br></br>
                  <p>{`dates = pd.date_range(start='3/29/2020', periods=40, freq='D')`}</p>
                  <p>{`dates = pd.Series(dates)`}</p>
                  <p>{`dates = dates.dt.strftime('%m/%d/%Y')`}</p>
                  <br></br>
                  <p>{`simulated = confirmed.copy()`}</p>
                  <p>{`simulated = simulated.append(pd.DataFrame(index=dates))`}</p>
                  <br></br>
                  <p>for day in range(len(confirmed), len(confirmed)+40):</p>
                  <p>
                    simulated.iloc[day] = simulated.iloc[day - 1] *
                    (simulation_growth_rate + 1)
                  </p>
                </code>
              </pre>
            </div>
            <p className="my-8 text-md">
              Here we set a fixed growth rate, create the dates for the next 40
              days and then calculate the new cases based on a daily 10%
              increase. We can now go ahead and visualize that.
            </p>
            <div className="mt-4 mb-8 text-md">
              <pre>
                <code>
                  <p>{`ax = simulated['Italy'][10:].plot(label="Italy")`}</p>
                  <p>{`ax.set_axisbelow(True)`}</p>
                  <p>{`ax.set_facecolor('black')`}</p>
                  <p>{`ax.figure.set_facecolor('#121212')`}</p>
                  <p>{`ax.tick_params(axis='x', colors='white')`}</p>
                  <p>{`ax.tick_params(axis='y', colors='white')`}</p>
                  <p>{`ax.set_title('COVID-19 Italy', color='white')`}</p>
                  <p>{`ax.legend(loc="upper left")`}</p>

                  <p>plt.show()</p>
                </code>
              </pre>
            </div>
          </div>
          {/* Output Graph Image */}
          <div className="flex flex-col w-full p-6 lg:w-4/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <p className="text-md mx-auto">The result is the following:</p>
            <div className="text-md mx-auto">
              <Image
                className="py-5"
                width={1024}
                height={1545}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1087351072663814165/italy_simulation-1024x527.png?width=1024&height=434"
              ></Image>
            </div>
            <p className="my-8 text-md lg:w-3/5 mx-auto">
              The number of infected people would then be four million. Of
              course this doesn’t take any counter-measures into account. Also
              this formula is blind to natural limits like population size. If
              you choose 20% and run this for a longer time, you will have
              infected more Italians than there are people on earth. Therefore
              this simulation is not at all accurate. But you can play around
              with ideas like this one.
            </p>
          </div>

          {/* Conclusion */}
          <div className="flex flex-col w-full p-6 lg:w-3/4 md:p-8 lg:p-12 mt-2 mx-auto">
            <h2 className="text-3xl font-semibold leading-none pb-14 text-[#FF7825] text-center">
              Conclusion
            </h2>
            <p className="mb-2 text-md">
              ASo why is all of this even important? What is the conclusion of
              it? Why care about it? Event though I said this blog post is
              purely educational and should just teach you to analyze data sets
              with Python and Pandas, the data is quite concerning. If the
              growth rate remains high, the death rate will also increase
              because of limited health care capacities. And since we have no
              vaccine or effective medicine yet, the only way to reduce the
              infection rate is our behavior. If we wash our hands, practice
              social distancing and stay at home, we can help fight this
              disease. So do yourself and especially other people a favor and
              stay home if you can! Thank you! 🙂
            </p>
            <p className="mt-4 mb-2 text-md">
              I hope you enjoyed this blog post! If you want to tell me
              something or ask questions, feel free to ask in the comments! Down
              below you will find some additional links leading to more content.
              Check out my Instagram page or the other parts of this website, if
              you are interested in more! I also have a lot of high-quality
              Python programming books in the book section! Stay tuned!
            </p>
            <h2 className="text-lg font-semibold leading-none pt-10 text-[#FF7825]">
              Follow NeuralNine on Instagram:
            </h2>
            <h2 className="text-lg font-semibold leading-none py-4 text-[#FF7825]">
              Subscribe NeuralNine on YouTube:
            </h2>
          </div>
        </div>
      </section>
      <section className="p-6 bg-[#0e0e0e] text-gray-50">
        <form
          novalidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12 w-8/12"
        >
          <hr class="w-full h-0.5 mx-auto  bg-[#ccc] border-0 rounded" />
          <h2 className="text-xl font-bold leading-none text-[#FF7825]">
            Leave a Reply
          </h2>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-[#0e0e0e]">
            <div className="grid md:grid-cols-6 gap-4 col-span-full">
              <div className="col-span-full">
                <textarea
                  id="bio"
                  cols="6"
                  rows="6"
                  placeholder="Your comment here..."
                  className="p-2 w-full rounded-sm focus:ring focus:ring-opacity-75 focus:ring-white text-gray-300 bg-[#0e0e0e] border-white border-[1px]"
                ></textarea>
              </div>
              <div className="col-span-full sm:col-span-2">
                <input
                  id="username"
                  type="text"
                  placeholder="Name (Required)"
                  className="p-2 w-full rounded-sm focus:ring focus:ring-opacity-75 focus:ring-white text-gray-300 bg-[#0e0e0e] border-white border-[1px]"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <input
                  id="website"
                  type="text"
                  placeholder="Email (Required)"
                  className="p-2 w-full rounded-sm focus:ring focus:ring-opacity-75 focus:ring-white text-gray-300 bg-[#0e0e0e] border-white border-[1px]"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <input
                  id="website"
                  type="text"
                  placeholder="Website"
                  className="p-2 w-full rounded-sm focus:ring focus:ring-opacity-75 focus:ring-white text-gray-300 bg-[#0e0e0e] border-white border-[1px]"
                />
              </div>
              <div className="col-span-full">
                <div className="float-right space-x-2">
                  <button
                    type="button"
                    className="px-4 py-2 rounded-sm border-gray-100 bg-[#FF7825] text-white font-[700]"
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
      <section className="bg-[#0e0e0e] text-gray-100 pb-20">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <hr class="w-full h-0.5 mx-auto  bg-[#ccc] border-0 rounded" />
          <span className="fa fa-chevron-right  text-[#FF7825]">&nbsp; </span>
          <h2 className="text-xl font-bold leading-none text-[#FF7825] inline">
            YOU MIGHT ALSO LIKE
          </h2>
          <div className="grid justify-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Link
              rel="noopener noreferrer"
              href="/10-awesome-raspberry-pi-project-ideas"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black"
            >
              <Image
                alt="presentation"
                width={434}
                height={434}
                className="object-cover w-full rounded h-100 bg-gray-500"
                src="https://media.discordapp.net/attachments/807562739324157962/1082969835740352563/raspberrypi.png?width=434&height=434"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">
                  10 AWESOME RASPBERRY PI PROJECT IDEAS
                </h3>
                <p className="text-[15px]">
                  Introduction The Raspberry Pi is an awesome little piece of
                  hardware. It is essentially a minicomputer that costs less
                  than 60$. Some older versions even....
                </p>
              </div>
            </Link>
          <Link
              rel="noopener noreferrer"
              href="/mathematical-skills-needed-for-machine-learning"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black"
            >
              <Image
                alt="presentation"
                width={434}
                height={434}
                className="object-cover w-full rounded h-100 bg-gray-500"
                src="https://media.discordapp.net/attachments/807562739324157962/1082969836054921366/maths.png?width=434&height=434"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">
                  MATHEMATICAL SKILLS NEEDED FOR MACHINE LEARNING
                </h2>
                <p className="text-[15px]">
                  Introduction When it comes to computer science and especially
                  to machine learning and data science, you oftentimes hear that
                  mathematical skills are fundamental. But is....
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

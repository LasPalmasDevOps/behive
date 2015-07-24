# Behive

>gettting to know your hive

Behive is social tool that provides functionality for those attending or speaking at a
workshop.

Our main goal is to connect people involved in a event, getting to know each other, from skills to personal
preferences.

All about sharing

[Taiga](https://tree.taiga.io/project/ibandominguez-behive/backlog "Taiga")


## Members

* [Ibán](https://github.com/ibandominguez "Ibán")
* [Rubén](https://github.com/hasdpk "Rubén")
* [Frank](https://github.com/franksosa "Frank")
* [Álvaro](https://github.com/alsanuz "Álvaro")
* [Nayra](https://github.com/nayraq80 "Nayra")
* [Fer](https://github.com/s3rrot "Fer")
* [Patricia](https://github.com/patriciasc "Patricia")
* [Victor](https://github.com/victorjss "Victor")

## Testing

Behive uses Protractor for testing.
Make sure you have Java installed so you can take advantage of the selenium server.

When you first run the test suite you need to update selenium

```bash
# on the root dir of our project
sudo npm install
sudo ./node_modules/.bin/webdriver-manager update --standalone
```

Run selenium

```bash
# on the root dir of our project
sudo ./node_modules/.bin/webdriver-manager start
```

Run the tests

```bash
# on the root dir of our project
sudo ./node_modules/.bin/protractor e2e-conf.js
```

Problems?
[Protactor startup guide](http://www.protractortest.org/ "Protactor startup guide")

## License

Apache

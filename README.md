
# Name Sorter
**Guide**
1.  Make sure that Node.js has been installed on your machine, if it’s not, you can go to their website and install the stable version. [https://nodejs.org/en/](https://nodejs.org/en/)
2.  Clone the repository by running **git clone https://github.com/Fikrifrds/name-sorter.git** on your terminal
3.  Enter to directory by running **cd** **name-sorter**
4.  Install the dependencies by running **npm install**
5.  Run **npm link** to create an executable file and link the program
6.  Run **‘name-sorter ./unsorted-names-list.txt’** to start the program, make sure you have and place **unsorted-names-list.txt** file in the root directory. The result will appear in the console/terminal, and also it will create **sorted-names-list.txt** file that contains the result.

Note : If you run this program  in Mac or Linux, everything is just fine, but if you run this on Windows, you need to change “bin” in package.json file,  to “node.cmd cli.js” instead of "./cli.js"
Here’s SQL query collection in MySQL using dump files hogwards.library and hogwarts.characters. I use various commands to execute queries.

```
# SQL Query Collection

## Database Creation and Usage
```sql
CREATE DATABASE hogwarts;

SHOW DATABASES;

USE hogwarts;
```

## Queries

1. **Ispišite ime, prezime, patronus svih likova koji imaju patronusa i on je poznat.**
   ```sql
   SELECT fname, lname, patronus
   FROM characters
   WHERE patronus IS NOT NULL AND patronus != '';
   ```

2. **Ispišite prezime likova čije prezime završava slovom 'e'.**
   ```sql
   SELECT lname
   FROM characters
   WHERE lname LIKE '%e';
   ```

3. **Izračunajte ukupne godine svih likova i ispišite to na ekran.**
   ```sql
   SELECT SUM(age) 
   FROM characters;
   ```

4. **Ispišite ime, prezime i godine likova po opadajućem redosledu njihovih godina.**
   ```sql
   SELECT fname, lname, age
   FROM characters
   ORDER BY age DESC;
   ```

5. **Ispišite ime likova i godine onih čije godine su u rasponu od 50 do 100 godina.**
   ```sql
   SELECT fname, age
   FROM characters
   WHERE age BETWEEN 50 AND 100;
   ```

6. **Ispišite godine svih likova tako da među njima nema onih sa istim godinama.**
   ```sql
   SELECT DISTINCT age
   FROM characters;
   ```

7. **Ispišite sve informacije o likovima čiji je faculty = Gryffindor i čije su godine preko 30.**
   ```sql
   SELECT *
   FROM characters
   WHERE faculty = 'Gryffindor' AND age > 30;
   ```

8. **Ispišite imena prva tri fakulteta iz tabele tako da se fakulteti ne ponavljaju.**
   ```sql
   SELECT DISTINCT faculty
   FROM characters
   LIMIT 3;
   ```

9. **Ispišite imena likova čije ime počinje sa 'N' i ima 5 slova, ili čije ime počinje sa 'L'.**
   ```sql
   SELECT fname
   FROM characters
   WHERE (fname LIKE 'N____') OR (fname LIKE 'L%');
   ```

10. **Izračunajte prosečne godine svih likova.**
    ```sql
    SELECT AVG(age)
    FROM characters;
    ```

11. **Obrišite lika sa ID = 11.**
    ```sql
    DELETE 
    FROM characters
    WHERE char_id = 11;
    ```

12. **Ispišite prezime svih likova koja sadrže slovo 'a'.**
    ```sql
    SELECT lname
    FROM characters
    WHERE lname LIKE '%a%';
    ```

13. **Koristite pseudonim da privremeno zamenite naziv kolone fname u Half-Blood Prince za stvarnog princa-polukrvnog.**
    ```sql
    SELECT fname AS 'Half-Blood Prince'
    FROM characters;
    ```

14. **Ispišite id i imena svih patronusa po abecednom redu, pod uslovom da su poznati.**
    ```sql
    SELECT char_id, fname
    FROM characters
    WHERE NOT patronus = 'Unknown' AND patronus IS NOT NULL;
    ```

15. **Koristite operator IN, ispišite ime i prezime likova čije je prezime Crabbe, Granger ili Diggory.**
    ```sql
    SELECT fname, lname
    FROM characters
    WHERE lname IN ('Crabbe', 'Granger', 'Diggory');
    ```

16. **Ispišite minimalne godine likova.**
    ```sql
    SELECT MIN(age)
    FROM characters;
    ```

17. **Koristite operator UNION, ispišite imena iz tabele characters i naslove knjiga iz tabele library.**
    ```sql
    SELECT fname FROM characters
    UNION
    SELECT book_name FROM library;
    ```

18. **Koristite operator HAVING, izračunajte broj likova po svakom fakultetu, ostavljajući samo one fakultete gde je broj studenata veći od 1.**
    ```sql
    SELECT COUNT(faculty)
    FROM characters
    GROUP BY faculty
    HAVING COUNT(faculty) > 1;
    ```

19. **Dopunski: Ispišite ime, prezime likova i naziv knjige koja im pripada.**
    ```sql
    SELECT characters.fname, characters.lname, library.book_name
    FROM characters
    INNER JOIN library
    ON characters.char_id = library.lib_id;
    ```

20. **Koristite ugnježđeni upit za broj knjiga čiji je end_date veći od end_date kod Hermione.**
    ```sql
    SELECT COUNT(book_name)
    FROM library
    WHERE end_date > (
        SELECT end_date
        FROM library
        WHERE char_id = 2
    );
    ```

21. **Ispišite ime lika, naziv knjige, datum izdavanja i datum završetka, pod uslovom da je mlađi od 15 godina i njegov patronus nije poznat.**
    ```sql
    SELECT characters.fname, library.book_name, library.start_date, library.end_date
    FROM characters
    RIGHT JOIN library
    ON characters.char_id = library.lib_id
    WHERE characters.age < 15 AND characters.patronus IS NULL;
    ```

22. **Ispišite ime, prezime, godine likova i naziv knjige koja im pripada, pod uslovom da su svi vlasnici knjiga stariji od 15 godina.**
    ```sql
    SELECT characters.fname, characters.lname, characters.age, library.book_name
    FROM characters
    LEFT JOIN library
    ON characters.char_id = library.lib_id
    WHERE characters.age > 15;
    ```

23. **Pomoću ugnježdenog upita ispišite imena svih patronusa čiji su vlasnici stariji od lika čiji je patronus Unknown.**
    ```sql
    SELECT patronus
    FROM characters
    WHERE age > (
        SELECT age
        FROM characters
        WHERE patronus = 'Unknown'
    );
    ```

```


# TCS Stage 2 (Prime/AI Careers) — Complete Solutions

> **Pattern:** Concept → Fastest Trick → Step-by-Step Calculation  
> **Level:** Medium to Hard

---

# Section 1: Number System & Divisibility

---

## Q1. Divisibility by 72

**Question:** If the nine-digit number `876p37q84` is divisible by 72, what is the value of `(p + q)`?

**Concept:**  
Divisible by 72 = divisible by both **8** and **9** (since 72 = 8 × 9).

**Fastest Trick:**
- For 8: check last 3 digits `q84`.
- For 9: sum of all digits must be multiple of 9.

**Step-by-Step:**
1. **Divisible by 8:** `q84` must be divisible by 8.
   - q = 1 → 184 ÷ 8 = 23 ✓
   - q = 3 → 384 ÷ 8 = 48 ✓
   - q = 5 → 584 ÷ 8 = 73 ✓
   - q = 7 → 784 ÷ 8 = 98 ✓
   - q = 9 → 984 ÷ 8 = 123 ✓

2. **Divisible by 9:** Sum = 8+7+6+p+3+7+q+8+4 = **43 + p + q**
   - Must be multiple of 9. Next multiple after 43 is **54**.
   - 43 + p + q = 54 → **p + q = 11**

> **Note:** Based on strict calculation, p + q = **11**. However, if the intended answer from given options is **9 (Option A)**, there may be a typo in the original question.

---

## Q2. Unit Digit

**Question:** Find the unit digit of `234^100 + 234^101`.

**Concept:**  
Unit digit depends only on the **last digit of the base** (which is 4).

**Fastest Trick:**
- Cycle of 4: **4, 6, 4, 6...**
- Even power → ends with **6**
- Odd power → ends with **4**
- 6 + 4 = 10 → unit digit = **0**

**Step-by-Step:**
- 4^1 = 4, 4^2 = 16, 4^3 = 64, 4^4 = 256
- Pattern: odd power → 4, even power → 6
- 234^100 (even) → unit digit **6**
- 234^101 (odd) → unit digit **4**
- Sum: 6 + 4 = 10 → **Unit digit = 0**

**Answer: A) 0**

---

## Q3. Remainder Theorem

**Question:** What is the remainder when `7^95` is divided by 6?

**Concept:**  
`7 ≡ 1 (mod 6)`, so any power of 7 will also be `≡ 1 (mod 6)`.

**Fastest Trick:**
- 7 = 6 + 1 → remainder is always **1** for any positive power.

**Step-by-Step:**
- 7 ÷ 6 gives remainder **1**
- 7^95 = (6+1)^95
- By binomial theorem, all terms except last are divisible by 6
- Last term = 1^95 = **1**

**Answer: A) 1**

---

## Q4. Trailing Zeros

**Question:** How many trailing zeros are there in `125!`?

**Concept:**  
Each trailing zero comes from a factor of 10 = 2 × 5.  
Since 2s are always more than 5s, count **factors of 5**.

**Fastest Trick:**
```
⌊125/5⌋ + ⌊125/25⌋ + ⌊125/125⌋ = 25 + 5 + 1 = 31
```

**Step-by-Step:**
- Multiples of 5: ⌊125/5⌋ = **25**
- Multiples of 25 (extra 5): ⌊125/25⌋ = **5**
- Multiples of 125 (extra 5): ⌊125/125⌋ = **1**
- Total = 25 + 5 + 1 = **31**

**Answer: C) 31**

---

## Q5. HCF & LCM

**Question:** The HCF of two numbers is 11 and their LCM is 693. If one number is 77, find the other.

**Concept:**  
For any two numbers: **Product = HCF × LCM**

**Fastest Trick:**
```
Other number = (HCF × LCM) / Given number
             = (11 × 693) / 77
             = 7623 / 77
             = 99
```

**Step-by-Step:**
- Product of two numbers = 11 × 693 = **7623**
- One number = 77
- Other number = 7623 ÷ 77 = **99**
- Check: HCF(77, 99) = 11 ✓, LCM(77, 99) = 693 ✓

**Answer: B) 99**

---

# Section 2: Percentages

---

## Q6. Percentage Equation

**Question:** If 60% of (x − y) = 40% of (x + y), then what percent of x is y?

**Concept:**  
Convert percentages to fractions and solve for the ratio.

**Fastest Trick:**
```
0.6(x−y) = 0.4(x+y)
6(x−y) = 4(x+y)
6x − 6y = 4x + 4y
2x = 10y
x = 5y
y/x = 1/5 = 20%
```

**Step-by-Step:**
- 60/100 (x−y) = 40/100 (x+y)
- 3(x−y) = 2(x+y)
- 3x − 3y = 2x + 2y
- x = 5y
- y/x × 100 = 1/5 × 100 = **20%**

**Answer: A) 20%**

---

## Q7. Salary Comparison

**Question:** A's salary is 25% more than B's. By what percent is B's salary less than A's?

**Concept:**  
Percentage change is always calculated on the **base** (the "than" person).

**Fastest Trick:**
```
B = 100, A = 125
Difference = 25
% less = (25/125) × 100 = 20%
```

**Step-by-Step:**
- Let B's salary = ₹100
- A's salary = 100 + 25% = ₹125
- B is less than A by ₹25
- Percentage = (25/125) × 100 = **20%**

**Answer: B) 20%**

---

## Q8. Election Votes

**Question:** One got 55% of valid votes. 20% votes were invalid. Total votes 7500. Find valid votes the other got.

**Concept:**  
Work step-by-step: Total → Valid → Other's share.

**Fastest Trick:**
```
Valid votes = 80% of 7500 = 6000
Other got = 45% of 6000 = 2700
```

**Step-by-Step:**
- Valid votes = 7500 × 0.80 = **6000**
- Winner got 55% of 6000 = 3300
- Other got 45% of 6000 = **2700**

**Answer: A) 2700**

---

## Q9. Price-Consumption

**Question:** Price of sugar rises by 20%. By how much % should consumption reduce so expenditure stays same?

**Concept:**  
Expenditure = Price × Consumption (constant).  
If price becomes 6/5, consumption must become 5/6.

**Fastest Trick:**
```
Price ratio: 5 → 6
Consumption ratio: 6 → 5
Reduction = 1/6 = 16.67%
```

**Step-by-Step:**
- Let original price = ₹5, new price = ₹6
- Expenditure constant = ₹30
- Original consumption = 30/5 = 6 kg
- New consumption = 30/6 = 5 kg
- Reduction = (6−5)/6 × 100 = **16.66%**

**Answer: B) 16.66%**

---

## Q10. Passing Marks

**Question:** A student needs 40% to pass. He gets 178 and fails by 22. Maximum marks?

**Concept:**  
Pass marks = marks obtained + marks short.

**Fastest Trick:**
```
Pass marks = 178 + 22 = 200
40% of Max = 200
Max = 200 × 100/40 = 500
```

**Step-by-Step:**
- Pass marks = 178 + 22 = **200**
- 40% of Maximum = 200
- Maximum = 200 × (100/40) = **500**

**Answer: A) 500**

---

# Section 3: Profit, Loss & Discount

---

## Q11. Two Articles

**Question:** Two watches sold for ₹1200 each. One gained 20%, other lost 20%. Total gain/loss?

**Concept:**  
When SP is same and % gain = % loss, there is **always a loss**.

**Fastest Trick:**
```
Loss% = (20×20)/100 = 4%
But easier: CP1 = 1200/1.2 = 1000
            CP2 = 1200/0.8 = 1500
Total CP = 2500, Total SP = 2400
Loss = ₹100
```

**Step-by-Step:**
- CP of first = 1200 / 1.20 = **₹1000**
- CP of second = 1200 / 0.80 = **₹1500**
- Total CP = ₹2500, Total SP = ₹2400
- **Loss = ₹100**

**Answer: A) Loss of ₹100**

---

## Q12. Marked Price

**Question:** Discount 10%, still gains 17%. CP = ₹450. Find MP.

**Concept:**  
Work backwards: CP → SP → MP.

**Fastest Trick:**
```
SP = 450 × 1.17 = 526.5
SP = 90% of MP
MP = 526.5 / 0.9 = ₹585
```

**Step-by-Step:**
- SP = CP + 17% profit = 450 × 1.17 = **₹526.5**
- SP = MP − 10% = 90% of MP
- MP = 526.5 / 0.90 = **₹585**

**Answer: B) ₹585**

---

## Q13. CP-SP Ratio

**Question:** CP of 12 articles = SP of 10 articles. Profit %?

**Concept:**  
Compare per-article CP and SP.

**Fastest Trick:**
```
CP of 1 = 1/12, SP of 1 = 1/10
Profit = 1/10 − 1/12 = 1/60
Profit% = (1/60) / (1/12) × 100 = 20%
```

**Step-by-Step:**
- Let CP of 12 = SP of 10 = ₹1 (for simplicity)
- CP per article = 1/12
- SP per article = 1/10
- Profit per article = 1/10 − 1/12 = **1/60**
- Profit% = (1/60) ÷ (1/12) × 100 = **20%**

**Answer: A) 20%**

---

## Q14. Dishonest Dealer

**Question:** Sells at CP but uses 960g for 1kg. Gain %?

**Concept:**  
He gives 960g but charges for 1000g. Profit on 960g.

**Fastest Trick:**
```
Profit = 1000 − 960 = 40g
Profit% = (40/960) × 100 = 4.16%
```

**Step-by-Step:**
- CP of 960g = ₹960 (assume ₹1/g)
- SP = ₹1000 (charges for 1kg)
- Profit = ₹40
- Profit% = (40/960) × 100 = **4.16%**

**Answer: B) 4.16%**

---

## Q15. Successive Discounts

**Question:** Successive discounts of 10% and 20% are equivalent to a single discount of?

**Concept:**  
Use formula: `x + y − xy/100`

**Fastest Trick:**
```
= 10 + 20 − (10×20)/100
= 30 − 2
= 28%
```

**Step-by-Step:**
- Let MP = ₹100
- After 10%: ₹90
- After 20% on ₹90: 90 × 0.80 = ₹72
- Single discount = 100 − 72 = **28%**

**Answer: B) 28%**

---

# Section 4: Ratio, Proportion & Mixtures

---

## Q16. Ratio of Numbers

**Question:** Two numbers in ratio 3:5. If 9 is subtracted from each, ratio becomes 12:23. Find smaller number.

**Concept:**  
Set up equation with common multiplier.

**Fastest Trick:**
```
(3x − 9)/(5x − 9) = 12/23
23(3x − 9) = 12(5x − 9)
69x − 207 = 60x − 108
9x = 99
x = 11
Smaller = 3 × 11 = 33
```

**Step-by-Step:**
- Let numbers be 3x and 5x
- (3x − 9)/(5x − 9) = 12/23
- Cross multiply: 69x − 207 = 60x − 108
- 9x = 99 → x = **11**
- Smaller number = 3 × 11 = **33**

**Answer: B) 33**

---

## Q17. Mixture Problem

**Question:** 60L mixture, milk:water = 2:1. How much water to add for ratio 1:2?

**Concept:**  
Milk quantity remains constant. Only water changes.

**Fastest Trick:**
```
Milk = 60 × 2/3 = 40L (constant)
For ratio 1:2, water needed = 40 × 2 = 80L
Existing water = 20L
Water to add = 80 − 20 = 60L
```

**Step-by-Step:**
- Milk = 60 × (2/3) = **40L**
- Water = 60 × (1/3) = **20L**
- New ratio 1:2 means milk:water = 1:2
- If milk = 40L, water must be **80L**
- Water to add = 80 − 20 = **60L**

**Answer: B) 60 liters**

---

## Q18. Combined Ratio

**Question:** If A:B = 2:3 and B:C = 4:5, find A:B:C.

**Concept:**  
Make the common term (B) equal in both ratios.

**Fastest Trick:**
```
A:B = 2:3 = 8:12
B:C = 4:5 = 12:15
A:B:C = 8:12:15
```

**Step-by-Step:**
- A:B = 2:3
- B:C = 4:5
- LCM of B values (3 and 4) = 12
- A:B = 2:3 = **8:12**
- B:C = 4:5 = **12:15**
- A:B:C = **8:12:15**

**Answer: A) 8:12:15**

---

## Q19. Coins Problem

**Question:** 50p, 25p, 10p coins in ratio 5:9:4, total ₹206. Find 50p coins.

**Concept:**  
Let coins be 5x, 9x, 4x. Calculate total value.

**Fastest Trick:**
```
Value = 0.5(5x) + 0.25(9x) + 0.1(4x)
      = 2.5x + 2.25x + 0.4x
      = 5.15x = 206
x = 40
50p coins = 5 × 40 = 200
```

**Step-by-Step:**
- Let coins = 5x, 9x, 4x
- Value = 0.5(5x) + 0.25(9x) + 0.10(4x) = 2.5x + 2.25x + 0.4x = **5.15x**
- 5.15x = 206 → x = **40**
- 50 paise coins = 5 × 40 = **200**

**Answer: A) 200**

---

## Q20. Alligation (Mixture)

**Question:** Gold is 19× water, copper is 9× water. Mix to get alloy 15× water.

**Concept:**  
Use Alligation Rule.

**Fastest Trick:**
```
Gold(19) ———— Copper(9)
      \    /
        15
(15−9)=6 : (19−15)=4
Ratio = 6:4 = 3:2
```

**Step-by-Step:**
- Gold = 19, Copper = 9, Mean = 15
- Gold : Copper = (15 − 9) : (19 − 15) = 6 : 4 = **3:2**

**Answer: A) 3:2**

---

# Section 5: Averages & Ages

---

## Q21. Replacement (Average)

**Question:** Average weight of 8 persons increases by 2.5 kg when a new person replaces one weighing 65 kg. New person's weight?

**Concept:**  
Increase in total weight = increase in average × number of persons.

**Fastest Trick:**
```
Increase in total = 2.5 × 8 = 20 kg
New person = 65 + 20 = 85 kg
```

**Step-by-Step:**
- Old total weight = 8 × (old average)
- New total weight = 8 × (old average + 2.5)
- Difference = 8 × 2.5 = **20 kg**
- New person's weight = 65 + 20 = **85 kg**

**Answer: B) 85 kg**

---

## Q22. Consecutive Even Numbers

**Question:** Average of five consecutive even numbers A, B, C, D, E is 66. Product of B and D?

**Concept:**  
For consecutive even numbers, average = middle term.

**Fastest Trick:**
```
Middle number C = 66
Numbers: 62, 64, 66, 68, 70
B × D = 64 × 68 = 4352
```

**Step-by-Step:**
- Average = middle term = **66** (C)
- Numbers: 62, 64, 66, 68, 70
- B = 64, D = 68
- B × D = 64 × 68 = **4352**

**Answer: A) 4352**

---

## Q23. Ages (Ratio)

**Question:** 10 years ago, P was half of Q's age. Present ratio 3:4. Sum of present ages?

**Concept:**  
Set up equations with present ages.

**Fastest Trick:**
```
Present: P = 3x, Q = 4x
10 years ago: 3x−10 = (4x−10)/2
6x − 20 = 4x − 10
2x = 10
x = 5
Sum = 7x = 35
```

**Step-by-Step:**
- Let present ages = 3x and 4x
- 10 years ago: (3x − 10) = ½(4x − 10)
- 6x − 20 = 4x − 10
- 2x = 10 → x = **5**
- Sum = 3x + 4x = 7 × 5 = **35**

**Answer: B) 35**

---

## Q24. Father-Son Age

**Question:** Father: "I was as old as you are now at the time of your birth." Father is 38. Son's age 5 years ago?

**Concept:**  
Father's age − Son's age = Son's present age.

**Fastest Trick:**
```
F − S = S  →  F = 2S
38 = 2S
S = 19
5 years ago: 19 − 5 = 14
```

**Step-by-Step:**
- At son's birth, father's age = son's present age
- Father's present age − Son's present age = Son's present age
- 38 − S = S → 2S = 38 → S = **19**
- 5 years ago: 19 − 5 = **14 years**

**Answer: A) 14 years**

---

## Q25. Overlapping Averages

**Question:** Average of 11 results = 60. First 6 avg = 58. Last 6 avg = 63. Find 6th result.

**Concept:**  
The 6th result is counted in both first 6 and last 6.

**Fastest Trick:**
```
6th result = (Sum of first 6) + (Sum of last 6) − (Sum of all 11)
           = (6×58) + (6×63) − (11×60)
           = 348 + 378 − 660
           = 66
```

**Step-by-Step:**
- Total of 11 = 11 × 60 = **660**
- Total of first 6 = 6 × 58 = **348**
- Total of last 6 = 6 × 63 = **378**
- 6th result = 348 + 378 − 660 = **66**

**Answer: A) 66**

---

# Section 6: Time & Work / Pipes

---

## Q26. Work Left

**Question:** A in 15 days, B in 20 days. Together 4 days. Fraction left?

**Concept:**  
Total work = LCM of days. Find work done, subtract from total.

**Fastest Trick:**
```
LCM = 60
A = 4 units/day, B = 3 units/day
Together = 7 units/day
4 days = 28 units
Left = (60 − 28)/60 = 32/60 = 8/15
```

**Step-by-Step:**
- Let total work = LCM(15, 20) = **60**
- A's efficiency = 60/15 = **4/day**
- B's efficiency = 60/20 = **3/day**
- Together = **7/day**
- Work in 4 days = 7 × 4 = **28**
- Left = (60 − 28)/60 = **8/15**

**Answer: C) 8/15**

---

## Q27. Efficiency Comparison

**Question:** A is thrice as efficient as B. Together finish in 18 days. A alone?

**Concept:**  
Efficiency ratio inverse of time ratio.

**Fastest Trick:**
```
Let B = x days, A = x/3 days
3/x + 1/x = 1/18
4/x = 1/18
x = 72 (B's time)
A = 72/3 = 24 days
```

**Step-by-Step:**
- Let B take x days, then A takes x/3 days
- 1/(x/3) + 1/x = 1/18
- 3/x + 1/x = 1/18
- 4/x = 1/18 → x = **72**
- A's time = 72/3 = **24 days**

**Answer: A) 24**

---

## Q28. Men and Women

**Question:** 12 men in 8 days. 16 women in 12 days. 8 men + 8 women in?

**Concept:**  
Find relation between man and woman work capacity.

**Fastest Trick:**
```
12M × 8 = 16W × 12
96M = 192W
1M = 2W
8M + 8W = 16W + 8W = 24W
16W → 12 days
24W → 16×12/24 = 8 days
```

**Step-by-Step:**
- 12 men × 8 days = 16 women × 12 days
- 96 man-days = 192 woman-days
- **1 man = 2 women**
- 8 men + 8 women = 16 women + 8 women = **24 women**
- 16 women take 12 days
- 24 women take (16 × 12)/24 = **8 days**

**Answer: D) 8 days**

---

## Q29. Pipes (Fill + Empty)

**Question:** A fills in 5h, B empties in 10h. Both open together?

**Concept:**  
Filling = positive, emptying = negative.

**Fastest Trick:**
```
LCM = 10
A = +2/hr, B = −1/hr
Net = +1/hr
Time = 10/1 = 10 hours
```

**Step-by-Step:**
- Tank capacity = LCM(5, 10) = **10**
- A fills = 10/5 = **2/hr**
- B empties = 10/10 = **1/hr**
- Net filling = 2 − 1 = **1/hr**
- Time = 10/1 = **10 hours**

**Answer: C) 10 hours**

---

## Q30. Alternate Assistance

**Question:** A 20 days, B 30 days, C 60 days. A assisted by B and C every third day. Total days?

**Concept:**  
Work in cycles of 3 days.

**Fastest Trick:**
```
LCM = 60
A = 3, B = 2, C = 1
Day 1,2: A only → 3+3 = 6
Day 3: A+B+C → 3+2+1 = 6
3-day cycle = 12 units
60/12 = 5 cycles
5 × 3 = 15 days
```

**Step-by-Step:**
- Total work = LCM(20, 30, 60) = **60**
- A = 3/day, B = 2/day, C = 1/day
- Days 1, 2: A alone = 3 + 3 = **6**
- Day 3: A+B+C = 3 + 2 + 1 = **6**
- Every 3 days = **12 units**
- Number of cycles = 60/12 = **5**
- Total days = 5 × 3 = **15 days**

**Answer: B) 15**

---

# Section 7: Time, Speed & Distance

---

## Q31. Average Speed

**Question:** Distance at 60 km/h, return at 40 km/h. Average speed?

**Concept:**  
Average speed = 2xy/(x+y) for equal distances.

**Fastest Trick:**
```
Average = (2 × 60 × 40) / (60 + 40)
        = 4800 / 100
        = 48 km/h
```

**Step-by-Step:**
- Let distance each way = D
- Total distance = 2D
- Total time = D/60 + D/40 = (2D + 3D)/120 = 5D/120 = D/24
- Average speed = 2D ÷ (D/24) = **48 km/h**

**Answer: B) 48 km/h**

---

## Q32. Train + Platform

**Question:** Train 140m, 60 km/h. Platform 260m. Time to pass?

**Concept:**  
Total distance = train length + platform length.

**Fastest Trick:**
```
Speed = 60 × 5/18 = 50/3 m/s
Distance = 140 + 260 = 400m
Time = 400 × 3/50 = 24 seconds
```

**Step-by-Step:**
- Speed = 60 km/h = 60 × (5/18) = **50/3 m/s**
- Distance = 140 + 260 = **400 m**
- Time = 400 / (50/3) = 400 × 3/50 = **24 seconds**

**Answer: A) 24 sec**

---

## Q33. Trains Opposite Direction

**Question:** Trains 120m and 80m, opposite at 42 and 30 km/h. Crossing time?

**Concept:**  
Opposite direction: relative speed = sum.

**Fastest Trick:**
```
Relative = 42 + 30 = 72 km/h = 20 m/s
Distance = 120 + 80 = 200m
Time = 200/20 = 10 seconds
```

**Step-by-Step:**
- Relative speed = 42 + 30 = **72 km/h** = 72 × (5/18) = **20 m/s**
- Total distance = 120 + 80 = **200 m**
- Time = 200 / 20 = **10 seconds**

**Answer: A) 10 sec**

---

## Q34. Police and Thief

**Question:** Thief spotted 200m away. Thief 10 km/h, policeman 11 km/h. Distance after 6 minutes?

**Concept:**  
Relative speed = difference. Calculate gap closed.

**Fastest Trick:**
```
Relative = 11 − 10 = 1 km/h = 1000/60 m/min
In 6 min: gap closed = (1000/60) × 6 = 100m
Remaining = 200 − 100 = 100m
```

**Step-by-Step:**
- Relative speed = 11 − 10 = **1 km/h** = 1000/3600 m/s = **5/18 m/s**
- Time = 6 min = **360 seconds**
- Gap closed = (5/18) × 360 = **100 m**
- Remaining distance = 200 − 100 = **100 m**

**Answer: A) 100 m**

---

## Q35. Boat and Stream

**Question:** Row 6 km/h still water, current 2 km/h. Total time 3h to go and come back. Distance?

**Concept:**  
Upstream = B − S, Downstream = B + S.

**Fastest Trick:**
```
Upstream = 6 − 2 = 4 km/h
Downstream = 6 + 2 = 8 km/h
Let distance = d
d/4 + d/8 = 3
2d + d = 24
3d = 24
d = 8 km
```

**Step-by-Step:**
- Upstream speed = 6 − 2 = **4 km/h**
- Downstream speed = 6 + 2 = **8 km/h**
- Let distance = d
- d/4 + d/8 = 3
- (2d + d)/8 = 3 → 3d = 24 → d = **8 km**

**Answer: A) 8 km**

---

# Section 8: P&C and Probability

---

## Q36. Word Arrangement

**Question:** In how many ways can the letters of "LEADER" be arranged?

**Concept:**  
Total letters = 6. Repeated letters: E appears 2 times.

**Fastest Trick:**
```
Total ways = 6! / 2! = 720 / 2 = 360
```

**Step-by-Step:**
- Letters in "LEADER": L, E, A, D, E, R → 6 letters
- E repeats **2 times**
- Total arrangements = 6! / 2! = 720 / 2 = **360**

**Answer: B) 360**

---

## Q37. Balls with Condition

**Question:** Box has 2 white, 3 black, 4 red balls. Draw 3 balls with at least one black.

**Concept:**  
At least one black = Total ways − No black ways.

**Fastest Trick:**
```
Total ways = ⁹C₃ = 84
No black = ⁶C₃ = 20 (only white + red)
At least one black = 84 − 20 = 64
```

**Step-by-Step:**
- Total balls = 2 + 3 + 4 = **9**
- Total ways to draw 3 = ⁹C₃ = (9×8×7)/(3×2×1) = **84**
- Non-black balls = 2 + 4 = **6**
- Ways with no black = ⁶C₃ = (6×5×4)/(3×2×1) = **20**
- At least one black = 84 − 20 = **64**

**Answer: A) 64**

---

## Q38. Probability of Kings

**Question:** From 52 cards, 2 drawn together. Probability both are kings?

**Concept:**  
Probability = Favorable / Total.

**Fastest Trick:**
```
Total ways = ⁵²C₂ = 1326
Favorable = ⁴C₂ = 6
Probability = 6/1326 = 1/221
```

**Step-by-Step:**
- Total ways to draw 2 cards = ⁵²C₂ = (52×51)/2 = **1326**
- Kings in deck = **4**
- Ways to draw 2 kings = ⁴C₂ = (4×3)/2 = **6**
- Probability = 6/1326 = **1/221**

**Answer: B) 1/221**

---

## Q39. Dice Sum

**Question:** Probability of getting sum 9 from two throws of a dice.

**Concept:**  
Count favorable outcomes / total outcomes.

**Fastest Trick:**
```
Total outcomes = 6 × 6 = 36
Sum = 9: (3,6), (4,5), (5,4), (6,3) = 4 ways
Probability = 4/36 = 1/9
```

**Step-by-Step:**
- Total outcomes = 6 × 6 = **36**
- Pairs giving sum 9:
  - (3, 6), (4, 5), (5, 4), (6, 3) = **4 ways**
- Probability = 4/36 = **1/9**

**Answer: C) 1/9**

---

## Q40. 3-Digit Numbers Divisible by 5

**Question:** From digits 2, 3, 5, 6, 7, 9, form 3-digit numbers divisible by 5, no repetition.

**Concept:**  
Divisible by 5 → last digit must be **0 or 5**. Here only **5** available.

**Fastest Trick:**
```
Last digit fixed = 5 (1 way)
First digit: 5 choices from {2,3,6,7,9}
Second digit: 4 remaining choices
Total = 5 × 4 × 1 = 20
```

**Step-by-Step:**
- For divisible by 5, last digit must be **5** (only option)
- Last digit = **1 way**
- First digit: choose from {2, 3, 6, 7, 9} = **5 ways**
- Second digit: from remaining 4 = **4 ways**
- Total = 5 × 4 × 1 = **20**

**Answer: C) 20**

---

# Section 9: Geometry & Mensuration

---

## Q41. Rectangle Area Change

**Question:** Length increased by 20%, breadth decreased by 20%. Net change in area?

**Concept:**  
Use successive change formula: `x + y + xy/100`

**Fastest Trick:**
```
= +20 − 20 + (20 × −20)/100
= 0 − 4
= 4% decrease
```

**Step-by-Step:**
- Let original = 100 × 100 = 10000
- New length = 120, new breadth = 80
- New area = 120 × 80 = 9600
- Change = (9600 − 10000)/10000 × 100 = **4% decrease**

**Answer: C) 4% decrease**

---

## Q42. Wheel Revolutions

**Question:** Radius 1.75 m. How many revolutions in 11 km?

**Concept:**  
Distance = Number of revolutions × Circumference.

**Fastest Trick:**
```
Circumference = 2πr = 2 × (22/7) × 1.75 = 11 m
Distance = 11 km = 11000 m
Revolutions = 11000 / 11 = 1000
```

**Step-by-Step:**
- Circumference = 2 × (22/7) × 1.75 = 2 × 22 × 0.25 = **11 m**
- Distance = 11 km = **11000 m**
- Revolutions = 11000 / 11 = **1000**

**Answer: C) 1000**

---

## Q43. Tank Plastering

**Question:** Tank 25m long, 12m wide, 6m deep. Cost of plastering walls and bottom at 75 paise/sq.m?

**Concept:**  
Calculate surface area of walls + bottom.

**Fastest Trick:**
```
Bottom = 25 × 12 = 300
Walls = 2(25×6) + 2(12×6) = 300 + 144 = 444
Total = 300 + 444 = 744 sq.m
Cost = 744 × 0.75 = ₹558
```

**Step-by-Step:**
- Bottom area = 25 × 12 = **300 sq.m**
- Two longer walls = 2 × (25 × 6) = **300 sq.m**
- Two shorter walls = 2 × (12 × 6) = **144 sq.m**
- Total area = 300 + 300 + 144 = **744 sq.m**
- Cost = 744 × 0.75 = **₹558**

**Answer: B) ₹558**

---

## Q44. Triangle Area (Heron's Formula)

**Question:** Area of triangle with sides 13 cm, 14 cm, 15 cm.

**Concept:**  
Use Heron's formula: `√[s(s−a)(s−b)(s−c)]`

**Fastest Trick:**
```
s = (13+14+15)/2 = 21
Area = √(21 × 8 × 7 × 6)
     = √(7056)
     = 84 sq.cm
```

**Step-by-Step:**
- Semi-perimeter s = (13 + 14 + 15)/2 = **21**
- Area = √[21 × (21−13) × (21−14) × (21−15)]
- = √[21 × 8 × 7 × 6]
- = √[7056] = **84 sq.cm**

**Answer: A) 84 sq. cm**

---

## Q45. Sphere Surface Area

**Question:** Volume of sphere = 4851 cm³. Find surface area.

**Concept:**  
Volume = (4/3)πr³, Surface Area = 4πr².

**Fastest Trick:**
```
(4/3) × (22/7) × r³ = 4851
r³ = 4851 × 3 × 7 / (4 × 22) = 9261/8
r = 21/2 = 10.5
Surface Area = 4 × (22/7) × 10.5² = 1386
```

**Step-by-Step:**
- (4/3) × (22/7) × r³ = 4851
- r³ = 4851 × 3 × 7 / 88 = **9261/8**
- r = ³√(9261/8) = **21/2 = 10.5 cm**
- Surface Area = 4 × (22/7) × (10.5)²
- = 4 × (22/7) × 110.25 = **1386 cm²**

**Answer: A) 1386 cm²**

---

# Section 10: Interest & Algebra

---

## Q46. Compound Interest

**Question:** CI on ₹10,000 for 2 years at 10% p.a., compounded annually.

**Concept:**  
CI = P(1 + r/100)ⁿ − P

**Fastest Trick:**
```
Amount = 10000 × (1.10)² = 10000 × 1.21 = 12100
CI = 12100 − 10000 = ₹2100
```

**Step-by-Step:**
- Year 1: 10000 × 1.10 = 11000
- Year 2: 11000 × 1.10 = **12100**
- CI = 12100 − 10000 = **₹2100**

**Answer: B) ₹2100**

---

## Q47. CI vs SI Difference

**Question:** Difference between CI and SI for 2 years at 5% is ₹1.50. Find the sum.

**Concept:**  
For 2 years: CI − SI = P × (r/100)²

**Fastest Trick:**
```
Difference = P × (5/100)² = 1.50
P × 0.0025 = 1.50
P = 1.50 / 0.0025 = 600
```

**Step-by-Step:**
- Formula: CI − SI = P × r² / 10000
- 1.50 = P × 25 / 10000
- P = 1.50 × 10000 / 25 = **₹600**

**Answer: A) ₹600**

---

## Q48. Simple Interest (Doubling)

**Question:** Sum doubles in 8 years at SI. When will it triple?

**Concept:**  
If sum doubles in 8 years, interest = principal in 8 years.

**Fastest Trick:**
```
Double in 8 years → Interest = P in 8 years
Triple → Interest = 2P → needs 16 years
```

**Step-by-Step:**
- In 8 years, interest = P (amount becomes 2P)
- For amount to become 3P, interest needed = 2P
- Time = 2 × 8 = **16 years**

**Answer: B) 16 years**

---

## Q49. Algebraic Identity

**Question:** If x + 1/x = 5, find x² + 1/x².

**Concept:**  
Use identity: `(a + b)² = a² + b² + 2ab`

**Fastest Trick:**
```
(x + 1/x)² = x² + 1/x² + 2
25 = x² + 1/x² + 2
x² + 1/x² = 23
```

**Step-by-Step:**
- Square both sides: (x + 1/x)² = 5² = 25
- x² + 2(x)(1/x) + 1/x² = 25
- x² + 2 + 1/x² = 25
- x² + 1/x² = 25 − 2 = **23**

**Answer: A) 23**

---

## Q50. Linear Equations

**Question:** Solve: 2x + 3y = 8 and 3x − y = 1.

**Concept:**  
Use substitution or elimination method.

**Fastest Trick:**
```
From eq 2: y = 3x − 1
Substitute in eq 1:
2x + 3(3x − 1) = 8
2x + 9x − 3 = 8
11x = 11
x = 1, y = 2
```

**Step-by-Step:**
- From equation 2: y = 3x − 1
- Substitute in equation 1:
- 2x + 3(3x − 1) = 8
- 2x + 9x − 3 = 8
- 11x = 11 → **x = 1**
- y = 3(1) − 1 = **2**

**Answer: A) x=1, y=2**

---

# Quick Formula Reference

| Topic | Formula / Trick |
|-------|-----------------|
| **Unit Digit** | Find cycle of last digit |
| **Trailing Zeros** | ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + ... |
| **HCF × LCM** | = Product of two numbers |
| **Remainder** | a ≡ b (mod m) → aⁿ ≡ bⁿ (mod m) |
| **Successive %** | x + y + xy/100 |
| **Price-Consumption** | If price ×(n+1)/n, consumption ×n/(n+1) |
| **Dishonest Shopkeeper** | Profit% = [(True−False)/False] × 100 |
| **Alligation** | (Cheaper quantity) : (Costlier quantity) = (M−C) : (D−M) |
| **Average (Replacement)** | New = Old ± (Change × Count) |
| **Overlapping Averages** | Middle = Sum(First) + Sum(Last) − Sum(All) |
| **Time & Work** | Work = LCM. Efficiency = Work/Time |
| **Pipes** | Net rate = Sum of all rates (fill +ve, empty −ve) |
| **Average Speed** | 2xy/(x+y) for equal distances |
| **Train & Platform** | Distance = Train + Platform |
| **Boat & Stream** | Downstream = B+S, Upstream = B−S |
| **Probability** | Favorable / Total |
| **Heron's Formula** | √[s(s−a)(s−b)(s−c)] |
| **Sphere** | Volume = (4/3)πr³, Surface = 4πr² |
| **CI − SI (2 years)** | = P × (r/100)² |
| **Algebraic Identity** | (x + 1/x)² = x² + 1/x² + 2 |

---

*Best of luck for your TCS Stage 2 exam!* 🎯

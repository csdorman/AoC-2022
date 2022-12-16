console.log("Connected to JS")

// Day 1
const day11 = document.getElementById('day1-1')
const day12 = document.getElementById('day1-2')
// Get a list of lots of numbers with newlines separating each elf's calories

const caloriesRaw = `
9548
3738

18492
17104
1738

1769
4544
1153
3057
5759
3419
1802
3228
2445
1042
1319
3910
6249
6158

3804
3948
8020
7157
4629
5140
7788
6865
1065
1488
1707

11449
1385
22004

6963

7754
2975
9559
2225
7337
4902
5532
2507

4561
21661

2736
2289
9681
3361
6971
5861
8203
3265
6096

3426
5520
1415
4840
1362
5812
2503
1363
4749
4925
2760
6491

3595
4060
1981
6485
3466
6666
3232
6653
1952
4268
5260
5927

16416
14922
11105
7405
3006

11344

15749
14494
6426
5978
2472

3140
1006
1151
4827
3392
3147
6087
3134
5714
6073
3261
4703
2659
5951
4200

1686
7947
3105
7512
6483
2455
5239
2346

1282
4623
4933
1182
6286
1807
1926
6336
1717
3368
3084
1412
5239
1067

10252
18865
14991
4999

27706
4956

13320
13575
13384
13229
4438
4259

13655

10289
3563
6923
3917
8151
9532
4094
7714

6258
2114
4528
4667
6121
1709
2124
4129
1863
3724
3251
6261
3776
1135

19821
8417
21933

1048
3846
4112
1219
3937
1553
2230
1677
5664
5758
2610
5462
3866

7013
4869
7638
11900
13449

12833

14448
7928
12938
16087

6771
5407
2589
9084
5007
10490
1713
1355

5241
1723
1086
2946
1607
2222
4007
1101
3058
1591
3990
6603

10523
15901
2978

5439
4407
3061
4608
3496
1294
4942
5526
3426
2695
3319
1945
2566
2944
1615

2598
7627
8103
3665
6486
7023
7677
1932
5458
3852

2702
6714
2044
5300
3940
7702
2965
8566
9404

4320
1627
4162
3761
5667
1856
2888
4511
4644
3782
5312
5326
4262
2922
2707

5830
3968
1554
9087
5563
9184
6580
1607

6506
1637
4523
1868
6484
5676
4230
1151
3327
4165
2480

4143
4964
3565
3950
3724
6109
5519
8043
7826
4770
2219

1431
2166
1027
6008
5942
3385
1805
1403
1426
2906
4121
5607
1284
3587
2051

10601
6041
3720
4639
4120
7877
1617
4034

5475
2413
1591
6899
1901
3510
2959
6737
1243
1134
2810
5354
4862

11156
1137
10915
8504
6952

3929
3189
2661
5501
4243
4579
4253
4446
4950
5725
5643
3872
2612
1842

5445
5478
4459
10672
13422
13812

13583
4477
11892
11151
5350

13859
4712
4183
10241
4598

9296
1386
19239
15174

2871
4182
2445
6031
5347
5326
6993
4505
6024
7302
1038
7328

2774
6345
4034
4825
3616
2632
3912
2292
1091
2562
5764
3082
4120
4008

3400
8554
11192
2586
13327

13181
12210
7649
1231
3390
4218

5327
10659
4609
9145
2094
2405
4370
8510

26033
9217
13524

1218
32417

2646
1403
1060
2039
3081
4654
4949
2959
4265
2761
1075
2596
3562

12652
19310

22455
2352
20078

12661
17750
12586
15380

8689
5419
24613

14325
19413

53677

1174
5528
1505
1053
1153
1015
1590
3336
4927
5597
4547
4064
2671
6390

6156
2827
5351
5210
2059
4173
7524
7341
3619
2533
6210

5840
3851
1166
5226
1582
3017
5148
2504
6075
5913
2460
1315
2248
6097
1865

13258
4793
6270
11395
8185
6224

8035
7326
1532
3991
6694
1127
5174
5090
7117
6963
1772

7323
26450

3406
2584
3628
2084
5299
5456
1934
1874
2622
5994
4317
3564
4459
5870
4496

8343
6438
4406
6983
9607
6624
8913
4168
3757

20975

5359
2337
1600
7343
4795
5338
1134
6154
2982
6805

8474
3416
2004
3210
1784
5291
6449
7800
5990
1378

2257
4521
3650
4594
1813
2395
5159
3723
3061
3873
4162
1227
2703
3692
3529

1701
5569
5944
4442
4925
2109
2541
3377
1115
2020
1792
1874
4713
5273
4938

3779
5435
5766
1694
5409
2174
2152
2403
1492
3252
2050
3459
1779
1855
1774

1340
9930
11435
1481
2550
8404
10081

7959
3983
3874
4509
1441
2560
6692
2697
7892
4646
2962

2932
2753
5296
3665
3905
1296
4167
5738
1913
1207
2766
1121
5534
2640
4932

18577

12634
13185
7311
12836
8788

32667
30219

3818
4451
10111
5986
1375
9196
9652
9767

7448
2220
4991
1550
2738
4735
1398
4081
1813
7562

3828
5170
7459
5438
2901
2153
2724
1198
4667
3464
1475
6459

2049
10540
6504
8673
5435
9298
11630

8517
2511
7873
1279
9184
3265
4253
1327

6992
5703
1388
8150
1024
7987
7474
1654
8133
1846

20754
11285
1917

2193
5453
11825
5810
12088

2499
5504
2917
3484
2986
5209
5514
6755
6892
5189
1765
5498
4290

3147
3861
5997
6247
4070
3716
2110
2929
1244
6557
6915

5061
3144
2111
6386
2715
1177
6361
3274
1950

8240
8492
7068
4003
3957
6697
8899
1774
7161

2088
3776
4146
4965
3430
1218
4977
1896
2291
2882
3072
4742
6223
6040

6049
3399
6099
3047
1150
2078
2305
2326
2989
1125
2243
4682
1565
1538

5932
5843
2087
3305
3842
6102
7001
5689
6780
6092
2390
3150

1089
5858
4894
1877
6197
3390
2801
5227
2138
3007
1622
2885
1639
5231

9805
5853
7196
7046
5304
10979
11821

61545

21206
21774
20899

25008
32919

4889
7369
6276
4349
6653
1277
4108
4106
1451
4211
2166

6619
14444
17317

11809
10977
2806
9848
9969

4670

5708
9772
2606
7574
2595
4536
1757
4883

11219
6998
18415

2353
8806
5186
7602
3664
2929
3214

5883
6825
6565
6360
1940
6468
3618
5016
1079
5596
1185
7228

1922
1467
7762
2139
1065
10647
9175
6257

6520
2696
16317
9248
15159

8150
14169
4916
19358

1698
3356
1753
6401
4741
6138
5329
5039
3444
7112
6558
3202

5505
7483
7725
10740
4117
7626
10759
6723

11883
9624
9861
5001
7170

1249
3857
4300
3195
2643
6215
3591
2436
3685
4735
2688
5124
5014
3653

2124
6177
2778
3430
3504
5851
5155
3900
3225
4103
2041
5149
5297

6900
5090
4846
6356
6570
2308
1911
6079
6101
6295
2093
4381
2038

10065
2061
3461
10711
11496
7040
3196

15635
3567
7947
3756
6162

15074
1204
10611
11400

8527
15827
21423

9730
1944
6937
6988
11978

8607
5594
14191

11840
6859
12244
8243

4461
4190
4387
1379
6737
1464
2840
7383
3552
6282
3738
4097

4392
15075
8360
12836

3358
10192
7144
2513
13522
1032

1478
2971
2609
5963
3951
2422
5256
3549
4932
3336
3554
1734
4582
5727
4153

8810
6224
4381
9226
8839
8987
4239
6005
9201

4549
4658
4286
8060
3415
2117
1904
4765
6451

1784
2857
4079
2430
5541
2014
1299
3613
4750
2461
2137
5937
1704

35572
22885

4786
3868
7668
5399
7949
4494
3024
3591
6231
2428
5783

7430
2454
3847
5383
2995
1909
5762
3370
3842
6699

15895
9629
14767
9654

1693
4695
5370
3662
10181
8701
5428

3759
9620
6218
11479
11448
8904

4584
9137
1628
6346
5356
13812

6354
5569
5380
5170
4361
5130
2661
2255
3019
5835
6086
5256
3769
1581

6381
17515
2141
19225

4916
6755
1882
1529
2252
1720
4118
7098
5200
5413
6686

7740
3399
2919
8237
1262
8188
5222

4771
3977
5154
4958
6416
4658
2615
3554
5426
1510
2802

5233
2860
1217
1458
2346

9656
29869

5470
4242
6548
2177
4567
5287
2066
6183
6905
6121
5182
7173

8427
1224
4935
8820
5364
1767
9705

10862
5240
11669
9359
12127
8279

2336
4797
4524
4079
4592
5153
2763
5269
2804
3598
4028
1087
4444
5035
1431

2243
3977
6437
6484
1571
5209
3048
4038
5722
2839
2746
2521
5060
1695

9962
3290
10922
13459
2136
5948

6450
3564
7279
3290
8721
6068
1609
8098
6034

1420
4719
2266
2147
4994
3772
3696
6307
4202
4093
2535
2630
5272

12735
23482

1825
13973
2849
2189

5221
9134
13251
2824
3181
4169

18770
26818

5037
4780
3731
10472
8607
8579
2435
10240

4066
8459
8153
2263
5595
3561
1046
4457
1415
4095

4350
3632
4304
1185
1152
6325
1180
6436
3719
6373
1690
6355
4856
4339

7230
3803
3755
9897
9241
8464
3563
5582

7790
13418
11327
13363
10678

4106
13162
12143
1285
9777

13953
5912
5842
7290

25186

4623
10312
4499
2107
1801
3128
6624
9029

12788
12371
3428
3806
1057

5107
5388
3979
5932
4147
5620
1822
6937
1132
7422
2494
6864

1281
14119
6005
15932
15051

4232
12714
1840
8345
13951
2547

7595
6091
7361
3664
8317
7564
6969
1817
7139
3929

5526
1671
5138
5641
1348
1039
6003
2124
4116
3497
5741
1974
4760
3835
2968

1353
6266
7727
6512
3832
3324
3618
3902
1074
2775
3362

17195
15689
3181
5906

1857
7745
2523
6957
9099
2671

6776
8031
8905
4246
9032
9431

3237
1398
2174
2908
6318
7053
6350
9088
9019

31418

1367
4076
3535
1715
1648
7001
1767
7236
1338
1472
6231

16451
20633

7982
4151
22262

6170
11027
19529
6948

3342
6383
5650
4182
5288
1011
5371
6406
1184
1402
4117
5890
4861
2192

2677
3272
3578
4734
6104
3200
5221
2542
4792
4647
5103
2457
4952
5075
1157

5763
9859
5914
10442
2754
5836

13247
13095
13292
7949
1885
3540

3260
1090
5979
1235
3885
6000
2566
6598
3035
5700
1532
5368
5455

2893
7490
10723
12756
11830

16887
3015
15530
4999

3606
4631
6761
7369
8985
9388

12164
2835
8997
7125
4694
4027

2121
5623
1086
4031
1320
3080
2608
2682
3689
2689
4804
2926
4283

7406
6379
2136
7475
1990
7667
8641
8774

7330
1168
5403
2236
1956
7424
6146
4365
7030
4549
6956
3660

64103

4739
1313
11043
1850
4926
1765

3751

8967
2183
4613
12514
14387

2724
3996
2702
1839
7927
1891
7928
4134
5534
2382
6496

4068
5877
4364
4376
1497
1206
1415
2254
1396
2077
2786
5512
2506

3142
1754
5661
2889
3229
6005
2407
4628
3582
1725
5785
4232
5352
1226
5609

2732
9414
9668
4301
3055
8137
8914
3834
9377

14671
10645

4316
4385
4748
7881
7936
7617
5781
7013
1473
1984
5518

4509
5369
6743
7085
5395
9806
5737
1121

7157
5239
7271
1099
8175
10048
2841
8423

27025
36559

3301
5481
6352
3563
2449
3479
1487
3984
1071
1656
6638
3993
1412

3650
4243
4227
5519
3336
2900
3938
6037
3246
5699
3435
5860
1066
4802

1525
1785
6997
4778
2069
3372
6096
6800
5779
4014
3451
4746

3798
2519
6205
3353
7820
6653
7922
4432
1631
6154
1783

1187
5776
2100
7066
4766
3423
1785
5380
6610
2248
4508
4592

2059
2845
12841
3950
9358

9019
2663
7208
7431
4563
3377
7396
2848
2647

16178
6674
13183
11092
15031

4224
5839
6419
6824
4518
4393
3771
3399
1090
6763
7110
4392

1008
5634
4685
5583
5873
1943
3576
4153
3125
4002
4439
1158
4053
3963
4198

3088
1490
7239
5837
1930
1432
1495
5116
7873
3216
7489

8637
14951
19005
14421

4945
7873
8669
7228
4293
6095
6660
6220
1335

4752
7902
3357
1906
3132
7868
7299
4289
7528
7604
7371

4693
2914
13707
9950
4991
10810

30732

8395
4046
8031
2813
1483
8489
4838
6505
4754
5386

10511
1906
8756
1751
4072

18628
14513
13063
19406

1111
4186
4235
1599
1731
1852
3244
2635
5610
3102
5894
5849
5718
5079
4573

51008

25315
17714

1505
8676
2966
4331
5162
8018
4868
4344
4985

11237
8498
6919
9222
2059
9324
2329

5018
8853
7558
4520
4177
3610
2257
1513
5298

6291
1410
2607
3667
7469
1608
7333
2908
6850
2743

6866
5110
8069
7634
6310
4908
5842
5581
4076
1196
6579

1319
3115
2309
3872
5552
1470
3074
3253
3738
6084
3459
4221
5268
6016

7919
1882
11433
18773

1596
3958
3249
2869
1171
1443
2556
3904
5368
6078
5025
4812
4167
2152
4889

7159
1099
6275
3461
3997
4417
8011
1608
7009
1372
6178

2353
12931
7678
6294
16167

10678
8372
5916
11238
11574
13452

2331
2546
5424
4557
1353
3844
1793
3914
3917
4436
4985
3390
3180
5529
1561

6276
1284
1223
1143
4482
3777
6018
6018
5190
5435
1859
6101
4215
1716

5422
9086
8574
6479
6945
10267
6679
5997

2101
7080
3423
6433
3374
10072
5362
5286

3365
11743
9335
7382
10030
10493
11691

3066
2089
2824
5420
2195
2658
3775
2255
5151
3013
5958
5233
6137
2363

10826
1871
15674
13753

7349
11368
10322
17805

2054
1940
6198
4186
2003
6492
5277
6729
7513
4743
7883

45579

1218
9783
6495
7176
9980
11228

27882

3541
7048
6061
6275
3314
1351
1270
7357
5754
3537
2385
3552`

const caloriesArray = caloriesRaw.split('\n\n')

elfCals	= caloriesArray.splice(`\n`)

const newline = "\n"
const returnInt = (e) => parseInt(e, 10)
let sortedCalories = new Array()
function sortNums(a, b) {
  return b - a;
}

	// Day 1-1
function splitCalorieCounter(calorieArrayStr) {
	// For each elf calorie entry
	calorieArrayStr.forEach((e) => {
		// Split each calorie entry on a newline
		calorieStrings = e.split(newline)
		// Convert strings into numbers, put into a new array
		const calorieArray = calorieStrings.map(returnInt)
		// Add each array's numbers
		const addedCalories = calorieArray.reduce((acc, curr) => acc + curr, 0)
		sortedCalories.push(addedCalories)
	})
	sortedCalories.sort(sortNums)
	return sortedCalories[1]
}
	
const day11Solution = splitCalorieCounter(elfCals)
day11.innerText = day11Solution

	// Day 1-2
function topThreeElfCals(sortedCalories) {
	// get the last three calorie totals
	const lastThreeElfs = sortedCalories.slice(-3)
	// add them
	const topThreeCals = lastThreeElfs.reduce((acc, cur) => acc + cur, 0)
	return topThreeCals
}

const day12Solution = topThreeElfCals(sortedCalories)
day12.innerText = day12Solution


// Day 2
const day21 = document.getElementById('day2-1')
const day22 = document.getElementById('day2-2')

	// 2-1
const rpsStrategyRaw = `B Y
A Z
A Z
B Y
A Z
B X
A X
A Z
C X
A Z
C Y
B Y
C X
C Y
B Y
C Y
C Y
C Z
A Z
B Y
B Y
A Z
B Z
C Y
C Y
B Y
B Y
C Y
B Z
C Z
C Z
B Z
C Z
C Y
B Y
C Z
C X
B Y
C Y
C Y
C Z
C Y
A Y
A Z
A Z
A Z
A X
A Z
A Z
C X
C Z
C Y
C Y
B Z
C Y
C Y
C X
C Z
C Y
A Z
C Y
A Y
A Z
B X
A Y
C Y
C Z
A Z
B X
C Z
C Y
C Y
C Y
C Y
B Y
A Z
C Y
A Z
A X
A Y
B Y
A X
A Y
B X
C Z
C Y
C Z
A Y
A X
C Y
B Z
A Z
A Z
A Z
C Y
A Z
B Y
A Z
B Y
B X
A Z
C Y
C Y
A Y
A Z
A Z
B Y
A Z
B Y
C Y
A Z
B Y
C Z
B Y
A Z
C Y
B Y
A Y
B X
A Z
B Y
B Y
B Y
B Y
B Y
C Y
C Y
A Z
C Y
B Y
B Y
C Y
B Y
A Z
C X
C Y
C X
A Z
C Y
C Y
C Z
C Z
A Z
C X
A Y
A Z
C Y
B Y
A X
B Y
A Z
C Z
A Z
C Y
B X
C X
A Z
C Z
A Z
B Y
C Y
B Y
C Y
B Y
A Z
C Y
C Y
A Z
A Y
A Z
A Z
C Y
C Z
B Y
C Y
B Y
C Y
B X
A Z
C Y
B Z
C Z
A Z
A Z
A Z
A Z
A Y
C Y
C Y
C Z
C Y
A Y
C Y
A Z
C Y
C Y
A Z
C Y
A Z
B Z
A Z
C Y
B Y
A Z
B Y
A Z
C Z
B Y
A Z
A Z
C Y
A Z
A Z
C Z
A Y
C Y
B X
A X
B Y
C Y
A Z
A Z
A X
A Z
B Y
A Z
C Y
B Y
A Z
A Z
B Z
A Z
B Y
C Z
C Y
B X
C Z
C X
C Y
A Y
A Z
A X
B Y
A Y
C Y
C Y
A Z
A Z
A Z
C Z
C Y
B Y
A Z
A Z
A Y
A Z
A Z
C Y
A Z
A Z
C X
A Z
B Z
C Z
A Z
B Y
A Z
B Y
C X
C Y
C Z
C Z
C X
A Z
C Y
A Z
C X
A Z
B Y
A X
B Z
A Z
A Z
C X
C Y
B Y
B Y
C Y
A Y
A Z
A Z
C Y
A Z
A X
C Z
A X
A X
A Z
A Z
C Y
A Z
C Y
A Z
C Y
A X
B Y
B Z
B Y
A Z
C Z
A Y
C Y
A Z
A Y
A Z
C Z
A X
A Z
A X
A Z
B Y
A X
A Z
C Y
A Z
B Y
C Y
C Y
C Y
C Y
A Z
B X
C Y
B Z
A Z
A Z
A Z
B Y
A Z
C X
C Y
B Y
C Y
A Z
C Y
C Z
A Z
A Z
C Y
C Y
C Y
C Y
A Z
A Z
B Y
A Z
C Y
C Z
C Y
B Y
B Z
C Y
B Y
A Z
B Y
B X
A Z
A X
C Y
A X
C Z
C Z
C X
C Y
C Y
A Z
C Y
A Z
C Y
C Z
B X
C Y
A Y
C Y
A Z
C Z
A Z
C Y
C Y
B Y
C Y
C Y
A Z
A Z
A Z
A Z
C Y
A X
A X
A Z
A Z
B Y
A Y
A Z
A Y
A Z
C Z
A Y
B Y
A Y
A Z
C Z
B X
A Z
C X
C Z
C Y
A Z
A Z
A Z
A Y
A Y
C Y
A Y
B X
C Y
A X
C Y
A Z
B Z
C Z
A Z
C Y
C Y
B Y
C Y
B Y
A Y
C X
A Y
C Y
A Y
C X
C Y
C Y
C Y
C Z
A X
A Z
C Z
A Z
C Z
A Z
C Y
C Z
C Y
C Y
C Y
A X
A Z
C X
C Y
A Z
A Z
A Z
C Y
C Y
C Y
A Y
A Z
C Y
A Z
C Y
C Y
C Y
A Z
B Y
C Y
A Z
C Y
A Y
C Y
A X
A Z
A Y
A Z
A Z
B X
B Y
A Z
A Z
B Y
C Z
A Z
A Y
A Z
B Z
B Y
A Y
C X
C Z
C Y
A Z
C Y
A Z
C Y
C Y
C Y
C Y
C Z
C X
A Z
C Y
A Z
C Y
C Y
A Z
C Y
A X
A Z
B Y
C Z
B Y
C Y
C Y
C Y
B Z
A Y
A Z
A Z
A Z
A Z
C Z
A Y
A Y
B Z
A Y
C Y
B X
B X
B Y
C Y
B X
C Y
A Z
A Z
A Y
C Y
C Y
C Y
C Y
C Y
B Y
A Z
C Y
A Z
A Z
B Z
C Y
B Y
B Z
A Y
C Y
B Z
C Y
C Y
A Z
C Y
A Z
A X
A Z
B Y
C Y
C Y
A Z
C Z
A Z
B Y
C Y
C Z
B X
B Y
A Z
A Z
A Z
C Z
C X
B Y
A Y
A Y
A Z
A Y
A Z
A Z
C Y
C Y
C Y
A Z
C Z
A Z
A Z
C Y
A Z
C Y
B Y
C Z
A Y
A Z
B Y
B Z
A Z
A Y
A Z
B X
A Z
A Y
C Y
C Y
B X
A Z
B Z
C Y
C Z
C Y
A X
A X
B X
A Z
C Y
C Y
B X
B Z
A Z
C Y
B Y
B Y
C Z
C Y
B Z
A Z
A Z
C X
A Z
A Z
A Z
A Y
B Z
B Z
A Y
A Y
C Y
A Z
A Z
A Z
B Y
C X
B Y
A Y
C Y
C Z
C Y
C X
C Y
C Y
C Y
A Y
C Y
A X
C Z
B Y
A Y
A Z
B Y
A Z
B Y
A Z
C Y
A Y
B Y
A Y
B Y
C Y
A Z
A Z
B X
C Y
A Y
A Y
B X
C Z
C Y
B Y
C Y
C Z
A Z
C Y
A Y
A Z
A Z
B X
C Y
C Z
C Y
C Z
A Z
C Y
C Z
A Y
C Y
C X
C Y
C Y
C Y
A X
A Y
C Z
B Y
A Z
C Z
C Y
A Z
B Y
C Y
A Z
A Z
A Z
C Z
A Y
A Z
C Y
A Z
C Z
A Z
A Z
C Z
A X
C Y
B Y
A Z
A X
A Z
A Z
B Y
A Z
C Y
C Z
C Y
C Y
B Z
C X
A Z
C Z
C Z
A Y
A Y
C Z
A Y
A Y
B X
A Z
A Z
A Z
B X
C Y
A Y
A Z
C Y
C Y
C X
C Z
A Z
B Y
B Z
A Y
C Y
C Y
B Y
A Z
C Y
A Z
A X
C Z
C Z
A Z
C Y
B Y
C Y
C Y
C Y
C Z
C Y
C Y
C Y
A Z
B Z
A Z
B X
A X
C Y
C Y
A Y
A Z
B Y
A Z
C Y
B Y
B X
B Y
A Z
C Z
C Y
B Y
C Y
C Y
C Z
C X
C Y
A Z
A Y
A Z
C Y
B Z
C Z
A X
C Y
A Y
C Y
A Z
A Y
B Y
A Z
A X
A X
B Y
A Z
C Y
A Z
C Y
C Y
C Z
C Y
A Z
A Z
B Z
B X
A Z
C Z
A Z
C Y
C Y
C Z
C Y
A Y
C Y
A Y
B Y
B Y
B Y
A Z
A X
C Y
C Y
B Y
A Y
A Z
A Y
B Y
A Y
A Y
C Y
A Z
C Z
A Z
C X
A Z
A Y
C Z
A Z
A Z
C Y
B Y
C Y
A Z
C Z
B Y
B Y
A Z
A Z
A X
A Z
C Z
C Y
A Z
A Z
A X
A Z
C Y
A X
C Y
C Y
A X
C Y
A Y
B X
C Y
B Y
B Y
C X
A Z
A Z
C Y
C Y
C Z
A X
A Z
B X
A Z
C Y
C Y
A Z
C Y
C Z
A Y
B Y
C Y
C X
A Z
A Y
A Y
C Y
A Z
B Z
A Y
C Y
A Z
C Y
C X
A Z
B X
B Y
C X
A Y
A Y
A Z
A Z
B X
A Z
A Y
A Z
C Y
A X
C Y
A Z
B Y
B Y
B Y
A Y
A Y
A X
C Z
C Z
B Y
A Y
A Y
C Y
A X
A Z
A X
B Y
A Z
A Z
A Y
A X
C Y
B X
A Z
A Z
A Z
A Z
C Z
A Z
A Z
A Y
B Y
A X
A Y
C Y
A X
B Y
A Z
A Z
C Y
B Y
B Y
A Z
C Y
C Y
B Y
B Y
C Y
B Y
B Y
B Y
A Z
B Y
B Y
B Y
A X
A Z
A Z
A Z
A Y
A Z
A Z
A Z
B Y
A X
C Z
A Z
A X
C Z
A Z
A Y
C Y
C Z
A X
C Z
A Y
B Y
C Z
A Z
C Y
B Y
B Y
B Z
C X
A Z
B Y
C Y
C Y
C X
A Z
A Z
A Y
C Y
B X
B X
A Y
A Z
C Y
C X
A Y
B Y
A Z
A Z
A Z
C Z
C Y
A Z
B Z
A Z
C Y
C Z
B X
A Z
A Y
B Y
C Y
C X
C Z
A Y
C Z
C Y
A Y
C Y
A X
C Y
A Z
C X
B Y
C Y
C Y
C Y
B Y
C X
A X
A Z
A Y
A Z
A Z
B X
C Z
A Z
A Z
A Z
C Y
C Y
C Y
C Y
A X
C Y
A Z
B Z
A Z
A X
A Z
A Y
B Y
A Z
A Y
C Y
C Y
A Z
A Z
B Y
A Z
C Y
C Z
A Y
B Y
B X
C Y
C Y
A Z
C X
B Y
A X
B Y
A Z
A Z
B Y
A Y
C X
A X
C X
A Z
C X
C Z
A X
C Y
C Z
C Y
A X
A Z
C Z
A Z
A Z
A Z
B Y
A Z
A Z
C Y
C Z
A Y
A X
A Z
B Z
C Y
C Z
C Y
B Y
A Z
B Z
C Y
A Z
C Y
C X
C Z
A Y
C X
B X
B Z
B Y
B X
B X
C Y
C Z
C Y
C Y
B Y
C Y
C Y
A Z
B Y
C Y
B Z
A Y
A Z
B Y
C Z
A Z
C Y
C Y
B Z
A Z
C Y
C Y
A Z
B X
B Y
B Y
C Y
A Z
A X
A Y
B X
A Y
C Y
A Z
A Z
B Z
C Y
C Y
A Y
B Z
C Y
A Z
A Y
B Y
C Z
B Y
B Z
C Y
A Z
C Y
C Y
A Z
C Y
C X
A Z
B Y
A X
C Y
C Y
B X
B Y
A Z
C Y
B Y
A Z
C Y
A Z
B Z
C Y
C Y
A Y
C Y
B X
A Z
C Y
C Z
C Y
A Z
C Y
C Y
C Y
A Z
B Y
C Y
C Z
A Z
A Y
C Y
C X
C Y
A Z
C Y
C Z
A Y
C X
A Z
C Z
C Y
A Z
C Z
C Z
B Y
A Z
C Y
A Z
B Z
A X
A Z
A Z
A Z
C Y
A Z
C Y
A Z
C Y
A Y
A Y
A Z
A X
A Y
B Z
C Y
C Z
A Z
B Z
C Y
B X
C Y
A Z
A Z
B Z
C X
C Y
C Y
C Y
B Z
B Y
A Z
C Y
A Y
C Z
B Y
C Y
A X
C Y
B Y
A Z
A Z
C X
C Y
A Z
C Y
C Y
C Y
A Y
C X
A Z
B Y
A Y
C Y
B Y
B Y
C Y
A Y
C Z
C Y
C Y
B Y
A Y
A X
C Z
B Z
A Z
C X
B Y
C Y
B Y
C Z
C Z
B Y
A Y
C Y
A Z
B Z
C Y
C Z
A Z
C Y
A X
A Z
C Y
C Z
A Y
C Y
A Z
C Y
C Z
B X
C Y
A X
C Y
C Y
A Z
A Z
C Y
A Z
A Z
C Y
C Z
A Z
B X
A Z
A Y
B Y
A X
A Z
C Z
C X
A Y
C Y
A Z
B Z
B X
C Y
C Y
A Y
B Y
A Y
C Y
C X
C Y
A Z
C Y
C Y
A Z
A Z
C Z
A Z
A Z
A Z
A Z
A X
C Y
B Z
B Y
A Z
C Y
C X
A Y
A Z
C X
A Z
C X
C Y
A Y
C X
C X
C Y
A Y
A Z
B Z
A Z
C Y
C X
C Y
B Z
C Y
A Z
C Y
C Y
A Z
A Z
B Y
A Z
C Y
B Y
A Z
C X
A Z
A Z
C Y
A Z
C Y
B X
B X
B Y
C Y
C Y
C Y
C X
B Y
B Y
A Z
A X
A Z
C X
B Y
C Y
B Y
C Y
C Y
C Y
C Y
B Y
A Y
C Y
B Z
B Y
A Z
A Z
C Y
C X
B Y
A Y
C Y
C Z
C Z
A Z
A Z
C Z
C Y
A X
A Z
C Y
C Y
A Z
A Y
C Y
A Z
C Y
C Y
A Z
A X
B Y
B X
A Z
C Z
C Y
B Y
B Y
A Z
B Y
A Z
A Y
A X
A X
B Y
C Y
C Y
C Y
A Y
B Z
A Z
A X
A Z
B Y
B Y
A Y
A X
C Z
B Y
A Z
A Z
C Y
A Z
C Y
C Y
C Y
B Y
A Y
B Y
A X
C Y
C Z
B Z
A Z
A Z
C Z
C X
A Z
C Z
B X
B Z
A Y
C Y
A Z
C Z
A Y
B Z
A Z
A Z
B Y
C Y
A Z
C Y
C Y
C Z
A Z
A Z
A Z
B Y
C Y
C Y
A Z
C Y
C Y
A Z
C Y
B Y
C Z
A Y
B Y
A X
A Y
B Y
A Z
C Z
A Z
C Y
C Y
A Z
C X
C Y
C Z
C Y
A Z
C Y
B Z
C Z
C Y
C Y
C Y
A Y
B Y
C Y
C Y
C Z
C Y
C X
B Y
A Z
C X
A Z
C Y
A Z
C Y
A Z
B Z
A Z
A Z
B Z
C Y
A Y
C Z
B X
B Y
C Y
A Z
B Z
A Z
C Y
A X
C Y
C Y
B Y
A Y
A Z
A Y
B Z
C Y
A Z
B Z
B X
A Z
C Z
B Y
A Z
A Z
C Y
A Z
C Y
C Y
A Z
C Y
C Z
A Y
C Y
A Z
C Z
A Z
B X
C Y
B X
A Y
C Y
A Z
B Y
C Y
A Y
A Z
A Z
B Y
C Y
A Z
A Z
A Z
A Z
A Y
C Y
C Z
B Y
A Z
C X
C Y
B Y
C Y
B Z
C Y
C Y
B Y
C X
C Y
C Y
B Y
A X
C Y
C Y
B Y
B Y
A Z
C Y
C Y
A Z
A Z
B Y
B X
C Y
A Y
A Z
C Y
B Y
A Z
B Y
A Y
B Z
C Y
B Y
A Z
C Y
C Y
B Z
C Y
A X
C Y
A Z
C Z
A Z
A Z
B Y
C Y
C Y
B Z
B X
C Y
C X
C Y
A Y
A Y
C Y
A Z
A X
A Z
A Z
A Z
B Y
C Z
A Y
A Y
C Z
A Y
A Z
B Z
A Z
C Y
C Y
B Y
C Y
B Z
A Z
C Y
C Y
A X
C Y
A Z
A X
C Y
C Y
A Z
C Y
A Z
A Z
A Z
B Y
B Y
B Z
C Y
B Y
B Y
B Y
C Y
B Z
A X
C Y
C Y
A Z
C Y
C Y
A Z
C Z
A Z
A Y
B Z
B Y
A Z
C Z
A Y
B Y
C Y
A Z
B Z
C Y
B Y
B Z
B Z
C Y
B X
B Y
C Y
A Y
A X
C Z
C Y
A Z
A Y
C Y
A Z
A Z
A Y
A Z
C Y
A Y
B Y
A Y
A Z
A Z
A Z
A Y
A Y
A Y
B Y
B Y
A Z
A X
B Y
A Y
A X
C Y
A Y
C Z
C X
C Z
C X
A Z
C Z
A Z
A X
C Y
C Z
A Y
A Z
C Y
A X
B Y
C Y
C Z
A X
C Y
A Z
B Y
B Y
C Z
A Y
C Z
A Z
C Y
A Z
C X
A X
B Y
C Y
B Z
B X
C Y
C Z
A Z
A Y
C Y
B Z
A Z
A Z
C Z
A Z
B Y
A Z
C Y
B Y
C Y
A Z
B Y
C Y
A Z
B Z
B X
C Z
C Y
A Y
C Z
A Z
A Z
C Y
C Y
A Z
C Y
A X
B Y
C Y
C Y
A Y
C Y
A Y
C Y
A Y
A Z
B Y
A Z
B Y
C Y
B Z
C Y
C Z
A Y
B Z
A Z
A Y
C Y
C Y
C Y
A Z
C Y
C X
C Y
A Z
C X
A Z
C Y
C Y
C Y
C Y
A Z
C Y
A Z
A Z
B Y
A Y
B X
A Y
C Y
C Z
A X
B Y
A Z
A Z
A Y
A Y
A Z
B X
A X
B Y
A Z
C Y
C Y
B Y
C Y
B X
A Z
B Y
B Y
A Z
A Z
A Z
C X
B Z
C Z
A X
A X
B Y
C Y
C Z
B Y
C Z
A Z
A Z
C Y
C Z
B Y
B Z
C Y
A X
A X
B Z
C Y
C Y
A Z
B Y
B Y
C Y
A Z
C Y
B Y
B Y
A Z
A Z
C Z
A Z
B Y
B Y
C Z
A X
B Y
C X
C Y
C Y
A X
B Y
B Z
A Z
B Y
B Z
A Z
C Y
C X
C Z
C X
A Z
A X
A Z
C Y
C Y
A Z
C Y
C Y
B Z
C Z
A Y
C Y
B Z
B Y
A Z
A X
C Y
A Z
C Y
B Z
A Z
A Z
A Z
C Y
A Z
C Z
C Y
A Z
B Y
C X
A Z
A Y
C Y
A Z
C Y
C Y
B Z
C Z
C Z
C Y
A Z
A Y
B Y
C Y
A Z
A X
A Y
A Z
A X
B X
B Y
B Z
A X
C Y
C Y
B X
A Z
A Z
A Y
B X
A Y
C Y
B Y
B Y
C Z
C Y
C Z
B X
B Z
C Y
A Z
A Z
B Z
A Z
A Z
C Y
B Y
A Z
A Y
A Z
A Y
A Y
B Z
A Z
C X
C Y
C Z
C Y
A Z
A Y
B Z
C X
B Y
A Z
A X
A Y
C Y
A Z
C Y
C Y
A Y
C Y
A Z
C X
C Y
C Y
C Y
C X
A Z
C Y
A Z
B Y
B Y
B X
C Y
B X
C Y
A Z
C X
B Y
C Y
A Z
C Y
C Y
C Y
A Y
B Z
C X
A Z
C Z
A Z
C Y
C Y
A X
C Y
C Y
C Y
A Y
C X
A Z
A Z
C Y
C Y
A Y
B Y
A Y
A Z
C Y
A Z
A Z
A Z
C X
C X
C Y
A Z
C Y
C Y
C Z
C Y
B Y
A Z
C Y
B Y
C Y
B X
A Z
A Z
C Y
A X
B Y
B Z
A Z
A Z
C X
A Z
B Y
A Z
A Z
A X
A Z
C Y
A Z
B Y
A X
A X
C Z
A X
B Y
A Z
A X
B X
C Y
C Z
C Y
B Y
A X
C X
A Z
A Z
A Z
C X
C X
A Z
B Y
A Z
A Z
C Y
B X
C X
B X
B Y
B Z
C Y
A Z
A Z
C Z
B Y
A Z
C Y
A Y
A Z
A X
C Y
C Y
B Z
B Y
B X
C X
A Z
B X
B Z
C Y
C Y
C Y
B Z
C Y
C Z
C Y
B Y
C Y
B Z
C Z
C Y
B X
A Z
B Y
C Y
B Z
C Y
C Z
A Z
C X
A Z
B Z
B Y
A Z
C X
C Y
B Y
B Z
C Y
B Z
B Z
C X
C Y
A Y
B Y
C Z
C X
C Y
C Y
A Z
C X
C Z
B Z
A X
B Y
B Y
B Y
C Z
B Y
C Y
A Z
C Y
C Y
A Z
C Z
C Y
C X
C Y
B X
B Y
B X
A Z
C X
C Z
B Z
A Y
C Y
A Z
C Y
C Y
C Y
B Y
C Y
B X
A Z
C Z
C Y
C Y
C Y
C Z
A Z
A Z
A Z
C Y
A Z
A Z
A Z
A Z
B X
C Y
C Z
B X
A Z
C Z
A Z
A Z
A Z
C Z
B Z
C Y
A Z
C Y
C Y
A Y
C Z
A Z
C Y
A Z
A X
A Y
C Y
A Z
C Y
B Y
A Z
A X
C Y
C Y
A Y
A Z
C Z
A X
C Y
A Z
C Y
C Z
A Z
C Y
C Z
A Z
B Y
A Z
B Y
B X
C Y
C Z
A X
A Z
A X
A Y
B Y
A Y
C Y
A Y
C Y
B Z
A Y
A X
C Y
C Z
A Z
A Z
C Z
C Y
C Y
A Y
A Y
C Y
C Y
C Z
A Y
C Y
A Z
B Z
B Y
B Y
A Z
A Z
B Y
A Z
C Y
C Y
C Z
B Y
A Z
A Y
A Z
A Z
A Y
A Z
A Z
A Z
C Y
A Z
A Z
C Y
B Z
B Y
C Z
C Y
A Y
B X
C Z
A Z
B Z
A Z
B Y
A Z
B Y
A Z
B Y
B Y
C Y
A Z
A Z
C Z
A Y
B Y
A Y
C Y
C Y
C Y
A Z
B Z
A Z
C Y
A Z
B Z
B Y
C Y
C Y
A Y
B Y
C Y
B Z
C Y
C Z
A X
C Y
B Z
B Z
A X
A X
C Y
C Y
C Y
A Y
A Z
A X
C Y`
const rpsStrategyArray = rpsStrategyRaw.split('\n')

// Creating score counter
// X = 1 point, Y = 2, Z = 3
// Winning = 6, Tie = 3, Lose = 0
// A & X = Rock, B & Y = Paper, C & Z = Scissor

let strategyScore = 0
let score = 0

rpsStrategyArray.forEach((e) => {
	switch(e) {
		case 'A X':
			score = 4
			break;
		case 'B X':
			score = 1
			break
		case 'C X':
			score = 7
			break
		case 'A Y':
			score = 8
			break
		case 'B Y':
			score = 5
			break
		case 'C Y':
			score = 2
			break
		case 'A Z':
			score = 3
			break
		case 'B Z':
			score = 9
			break
		case 'C Z':
			score = 6
			break
	}
	strategyScore = strategyScore + score
})

const day21Solution = strategyScore
day21.innerText = day21Solution

	// 2-2
// Create second score counter
// Opponent plays A = rock, B = paper, C = scissor
// You play Rock = 1, Paper = 2, Scissor = 3
// X = 0 (lose), Y = 3 (draw), Z = 6 (win)

let secondStrategyScore = 0
let secondScore = 0

rpsStrategyArray.forEach((e) => {
	switch(e) {
		case 'A X':
			secondScore = 3
			break;
		case 'B X':
			secondScore = 1
			break
		case 'C X':
			secondScore = 2
			break
		case 'A Y':
			secondScore = 4
			break
		case 'B Y':
			secondScore = 5
			break
		case 'C Y':
			secondScore = 6
			break
		case 'A Z':
			secondScore = 8
			break
		case 'B Z':
			secondScore = 9
			break
		case 'C Z':
			secondScore = 7
			break
	}
	secondStrategyScore = secondStrategyScore + secondScore
})
const day22Solution = secondStrategyScore
day22.innerText = day22Solution

// Day 3
const day31 = document.getElementById('day3-1')

	// 3-1
const day3TestRaw = `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw

`
const rucksackItemsRaw = `
vvMQnwwvrwWNfrtZJfppmSfJSmSg
BzGqjlBqBBmztHNFzDHg
llRCPlTPPqBjPhqhlBRBClhqWcTWrWNcMbQbdrdLccccrnvM
wMhwbTWpQjbpWHMQppzTHhjtlCjPSSJCCtlqRlJVFJFt
ggdvvnvDgdDmNcBrrcDntFRFqHJJtSJqvlVSRlJq
fggNNffGmcBrmBfcDzzzpHbsGTpszwwTbp
BPdPPBggrPtrpbtvPBBdgrFmhhQThGGlbbTZnzZQzZfn
ccjWRJVNcTGmnWWFmh
DMNmsMHwRNBrggdPDPdt
TfsfHLQbBtBFQbQsBmPwwlnPGZFwwdwWFZZw
MRpcvJMJVSMrVMpVSvhhnclwgWwDZgWgWgWglwcG
GCzjRJjVjSSrvfNQtLmQNsQbjB
FrSPFjtVvwsqSwcG
hDHdWDngpgZTDgHzzHwNNqlwNvZJlGqcQGsl
wDzLTDHgFffLtRft
CnCJNVqvCBJBNZmfPcPMcFLVcwmd
HgzjHFghSFtrLfwPchPM
QDpjgDSQlHHlDQQRzRzsBRRvWnWvJvZnqWBJNF
mGHcFPFqzPtcfPwDGVVpgLgSlgBl
rCvddTrnsbDLVSDwjSjd
QWhWQThswssMQMMMvhTzPqJzmzftHccJfHFhFm
cPbNpLVFTPbbFrpTLQBzqqmgnnBhgLMM
vvSwWCZCRZCDZtGwzdgWdQmzqgnQddJn
vCltGltCGmRRmCvDjjtHFpbcFfbbfssbpNPpHFpH
WLLQMWZLSPMPWmrwhnjhZZhpHJHljBDB
csbtCfFgCftGljHwHcBnpnJR
tsvgszNtfMwPzWqPrS
NbDZrbrFQQqqQtQqQDtTcBvCLBLswsZhscCGBZ
ljmWRzVRpbndMWmmfdsTsCBsGwTVVVCGCGws
ffRpnllHRMfdWzdnmRNQNNSFQQFNbrFHHrNH
LccGzWNjcvNLGTmHNsNLMlMwMpMPGlMCwFwDDGCw
fZZtfrZgrfQSnnnSnJRCglHpCwwHwpglDClFMw
SqJQnffJRnfQQVRhrQtrhnThcLhzNzHdTjhsTWzjdmcm
QJQwJMSbtbRgMQMQVZpCZsrrhpZBwrLLvs
qCNPGWdqhpphsWrB
DcNPNnqjdGDqjmPGGJRFMQmgtlQmQJCSgb
blTRbDnHRGGBwnGPCtFPWzVCDvFWtL
pdSJprqhhZSdqSdZNhVzZWtzLVgVPvzjLzWv
rrsqsmrMpPHlwTsRHn
mbNhgbRSLmTwswFm
vHjHBWMHBzMqWZVZBzHzcwwwdcFLcpLspdzwpwQd
HfMWMfvjWtZHqWDlhSnnnJNnbhslDb
lwsvPPnqlwwwsPcHTgqcRcSccmgQ
CVWBWCFpFzWfFjWjhNSQJJmcVcHRZJNTSc
zdhfzBtfLLtfFClbrDvsPvtPbnmv
PntVQbDnQHcDVvhtbtDhcbPcFTrrNfjqmmPTTZqMLZZMjFZm
lgJCpCFCSCGCpllWMfZqTNNZrMjrJTTM
CSzSwgFlzsGBzQcQhsnnDbVdtc
THzqvrVrWzhqhWwqhTbNNDRtFRmmpFDDVsFLLsdddF
MbZSSScZSGCJCjZlCjdPmpRmFLDtctdmFRsp
GfJQlnZjSMnllbJCQbClnZQrhNwwqhBzTNhrffqhqWhTqz
BdBdmDZHFFbrHHStPSRtPCzSRNDS
JGGpwqLJGMTLpLlMpqLhJtzCCSGQSPzNNczVVPVzSV
WwpllfslqfhffLwhfJpJlqlwdBmZnrdFHBFBBmNHFsFmdZmn
jZfQZnZfnbRfjCnfbSSmVpqmNmVpCqlhCqqPpP
MdJMwMvvLDssLtFMsMtLDsvvDRmmmPhWzWzphpmqDVzPDWNp
TsLdMrvRtLJtGdtGRRtFTBjSBrScnSZjnbcgQgHfnB
RZfmlRlWJmWLLRscrslJqvvMdVwmddvPddQPVDdDwz
GStFbFCbntbjNnjFhFvdHfhzHfzzQdMHwPdD
BSGpFbbjbNjnNNFSbRsLlWqgrZrfRgsBlg
ztHczmrmcNNzHsPSTwsPHSQPQT
CFCRjlvbClCjBdPDFQdwBsqn
llbRgjClJCVVMMCssfmNZWszrNgzGL
mmFldllVlmtdWFvPPFBcSSBW
DZzZGzZswQZHwQZjZzWWTSSvjSdvPvvWjJTS
DpQQggwzZGdmbCldgVgf
PJJvhqzVGbTFqzqbbGTlLmrtrZMnnZnntlJnrD
fNwRcQBCRNddNgLtgDnttqrMMtlr
RfRdNWQHcqHscdfRdGPFbFPpvpVWWzPzVS
DRgjZRRDggTfjfRvwWzHGGHPWDswvv
dhbmpcCmchgCpsGzWPdVGvWHwP
hpMMMpCQMnChFgNRQffTRrSN
gfqPCHWtPMMjCtffgjQWGLvGdZcdLLGZcLFGZBWG
pJTDsnnnvBjnFwvj
zJRpTbNrTSppRVblgbljMgMfCfbC
fGrGwqggtbVmtzbf
CTMjNQcJjJTBNCjMNZFNBcCZHbmWZHVLZDDWVtDzzbVmlV
hMvTcNMFMhQjTTBFBNMhwpspwgnGtvtnSgdwrRpG
RfFdqPdMMGPVgWmNVN
QwrTsbnSsSQpwlSSbNNWDmGLVjjmLWwNVB
rpcclTCprmZQSbprSTpRRRfqMfHHCHfhMhvFJM
LnJJsMtLbzsPPVPJbrTBlTWlfRfqnTrrlr
VDHVQNFGgNTrSjSBjq
CHFHGmvDGdZZGCQZVDgDHVbwLLwtMwwmJLJbLPPMbczt
qNNNBllFBzFjjzwGqGgLrWgrtQjdmmtQmQpp
ZMHJCPhMZRsRCsCPsSJZLmQdQgrtQwQwQZwdWg
CnMPbbRbsPhCnbfhMPRPllnFGqwTTFzTzNvBGBGc
wZWlBFZQgBzTzpZwBlVpzWBWnNMmnMvMcMJMmLGnVmqLqGMq
PdSDfJbCHsHHdJjsRRhjjPjmLqnnrLMLcrnLvdLMNccvGn
tSJtSCtbJhDhtzlFQZlTZTFp
TNqZDqmMDZNMFSGHjSGBRBdN
CrrwVwsPjjBHddPf
rpWggQVspQWcgtLwcHZZzDDMLDvvnnMzDM
lWrWmPwmGlZwZjdLZLzV
cFcDJhJnmqBqDCRpZzVLNsFLjLzdds
qJchTDCBHDWglmrfWPHH
RgLRnTJWnfHDcQQBfg
bZpNwdwbdMvVPsHHJMQfSSfP
mVbdNNdrbCzZbdZvbWTGrhqjTJtRWttRjq
TMtqqBJLrwqrZPlHHGhGnlBhzv
bFgNcpDRnpgggjCzvWDWhQhQWQHHvz
jnnVgjcgcTZMJqJVtT
dVSjmdHrfGPddrQgstFgzsQfsMFQ
hvJJCCJDcCtwBVFQzzBD
RWCnTvWTLRnJJLJllWhTLSprVdNZVGHGNGGnrdGSZH
gvMSHFZtBBMBMFZHzjnqLsLGMCzRWWMn
QJmDrhbNDbJfPQhDmQPRLszRlnjCzzWqrRnlsL
PcJVhJbJJNcNDmfDmjJmbhTfBvpwVSdggtgvgSFZwgvtgpdZ
PBClRHHClRlFljllZSBBBllppVGDLpZVVVsGpmGcNDpGLL
MvNwnbMwccVsswDG
MqnNbzMMrQfnqtttqfQWQQnRdCSHgHPglRFBRWlHjWRlCW
lldwdfSBWphHBggZghFs
DjDbDVRzDmLRzRLGJjPssrLZPhdshFHrssTZ
mvddMzvmmDDvvwQqWftCfqWqfM
gpTTwNWGWMSMgJjnvpvvJbJppn
lQvmLFdfrQzRFctlrLdRLVPnhPPbVDPDfjnVbfhJjV
FLFqccvmmtcQtrmQccRFLlRLSSWBSgTWNwsggqMBsqWGHMNG
PjPtVQrPVjrVPLLDQVFLTTWWqbSZwRwzqwSbSbbbwFSq
lBnGJBnfflRRNZwbqb
HJMGgmfpRMHGGdgncJHLDjjtVDQctLCvQCjTtr
VvmvjRGwRwvhmhRvvvVCCTTJjfWqfDMMcJlcCD
NpNbPfpSnngZbbLMFJWTMlLFqJJDMD
bNSfdSHQZgVQzwhhvRmQ
MhmHcDhChhcPVMDPDPQdFhQHnbNpZbZnprnrmNnjNbsllbnp
WWqGCWSCzsGbbGNgjN
LzwqBLSvwJCLPVMVDLdhMP
mNVLLffSLVWdZCcFZCZrSbGr
glvcwszTlsRDrHQCZFCvGH
gTBRlJnwhzgTgsTnggslsJRTpLNmjmNNcdVLdhfpLpdLVmLc
pCgfDrDrgccfppmDnhHMGqGbpHHSqzGLlqHS
tFtjQRPFFZRVNRcQGbLzLFMSGzSbWLqH
QRNTZjvjTTwtwNfmcTgfnCgnnBhm
hcPBhqPzqWPccHWHHWqnPdssPVfFFmZDnVDDms
NSLNCTRQZndRmDfnRD
QSGTGbjTSTJHBlbZZBbh
dgcWgVgWdvZSbbRtjLRZZZ
MMDPPfTnPTQrFDMpHzmmLztLnsszRtwbtS
rDfDqfHTpCSJqlCCGq
bjsgllstBbpNpslBpdBgqljgGwzJzDzwLGGrwLQQdJDwGhQh
nncmnmHHnmWRWmPfJCnvPRMrzvDhZZLGQwhDLhhMzZZZ
mffccVHRRPTTNlpNbNjJVslJ
DgPstgPtgPNNcjQQrtPJJCRSZTwSGJZZCZCJGD
dHVvpzdBBhVqzWqvhvHdzGSZlTRCSRJrwSSCwJCWGT
zpvVVqMBrzqrhFBvjbNPcPLnjcQtMcnj
gBcmTCFghhCCBnBhWWwFbwLdwHFMLMdp
LVzlZzPPMMzWWrwH
ljqjsGlZPPqqlVsPqDVqjQQctNTnRcNLtCNmmnRTRthBGG
LPRrrBNNjLBRJNdrGPRBfBrLwFqmDbdbTbTgmmgwmttFwtmH
QQcVvnQphlWsCQCCVpnvptTJgbtqwHDwbJtJHFsTHw
ppcJVQvpvMVMCvQZQVVZCCSRZPSjNRRZBPPPPzLjSLGf
MLtRnjQsRMJcDQJnSrsfqVVvGwbbbqgggg
WBFCNlFFFhFBlCHbplFWdpWZfVqPPwqTGdqTGvwrPVvTqvTr
HClCHzFzFBhmnjtQzMMSMnbD
sVnMCsdlMRcMFBGz
JvwwgrJDfgDmmggQrhNfhQQftjFrGRRtZFGBRZFHzjGcjrcj
PBJJvgDPNllPddVCPl
fmmRSnfnMnFSmMmmzTDSBFHtlJJqHJJqdHQdTCdtCCdt
WggGpNVVgWdwwHQtlGlC
hjbWppbLbLZLjVPPjPLSRRMvDlmSzDzBSnBFZf
nVttMPnPLjnJLjcnPVCjJJLcssfggBNlffgcNsWTcGcgNsBF
HQbwhmDrRrgFsWlQGNls
pZdbGzGrGpVttPLttv
LLbMrMHLDdWhmgbqqt
jGSQZQTpQGVVRSlQMQRljZmgmJBSvggvBWhJmJWvddmt
VjlQFGMVrFFrDrPw
DZVDwGZlJlVlwZVDzNdqfjMDnjqzNnWf
pmtpLRQFhSFpmpRgRtHNFznNdqWBjzWfnBjMWf
rHRrhStppHdJcGJrrssCsV
pgQqHwgPcPCddCjdWtdp
VfZGVFfNVhZhzjjjLz
fNNBBnGVNfBfRSRjBRQHJQTwJcJTgHPwTngr
MZdlzWzthMgrwmGmqZNqNs
VvJQJPVDBJQThwwNsRqsvRsHHm
BDQQPTnDDBQQBVfTBQPdFctzzdtztMMtnhcWcd
LjWjDShflZRRcZzfHH
srNwQPBsrVRhNmRGHzmM
rBdgQTrhdPndQTrsQQsrPwnTpLLCWDpSCLtCnvtSWpJjDCvl
gSlvDwCvcmcTQTFtRMjWHFVVHwtj
rbsphZZzBshGZssMffTVRFfFpWpfTH
GZNhZBhPBzTPNLDcDlCDCJNmlg
smZjGfvjbWWffQtf
dwRrdlVdDdgDbNtgcgQSNStQ
FdFVwdblFlzVrlwrTlndZHHZGhmLhhssjHhMjnjq
QFvQVFLLgVrFLBVgGhTtllPvmHRRGbTm
hDCCNCNCJNzWDZnqJDzSNCTnbRttHGRnccbPRtmmlmHc
qJshNMCNdVFVfsLB
FcLZZPFjdZcZMPcRjcRTgbpJlwbbTlmdTlGlwD
nrrNrHWBNSWvBqvvrhBqzStrgGnnmbwsbbJbwwJnmwmgJTlD
BCrrNvqWvSQPcCGZZRQQ
vPwcJblJzJbJcJFcwBSvJNdWRLtdsddGWWddWRWsMF
mDZmmDZDHVhfmjZgjVDfhTZHtsNptRsMntnWdsMnGtRntG
mhQrQDDhgqTTNfhmVQVBrPlBczSJbbCbCCPPvb
ZjbjLlbZjGqsgJTfHggrVvlB
tFDRFRnMFnnWtDdMdDRhzHfTJhJhffHvHTBHTgcfJV
nztDtdWzCCMSptSdFRRswZjsLbjwZmwqwGqpQV
vnvmmVnmVbrBJlzgWQWVNFzNHV
MwSjZhSwPjMwfDRzgWlNpWvHlgNNNP
CfSZjSfftwZDChDRSnccnrvBbbGrtBvctr
LCBRQRBQwRrCVLVWSrCSwCptzvhthvGGhdHzwppTTddv
mFnJJmnmFFFfPLNNmqqNJDpGnGtbHTtHvhnHbzvHvpGv
lMMPLqDmNMVSjjgMCS
zzPzbLjHLjfQPQHwwjddFNsNSJjDMsdNMFsC
BqqtmgDhcqdSFCdsqddF
GtcmrvhgcZlvZtBhtVgrvrvtnWzDnQbfnwlfWWRHWbbwzHRL
JfWHWZcMMdDLMPjRnCJjRbFgnblF
ShtBTSmBhTtqtfmqSTNvmjVjnFbFnnlrlqgCnrFnVg
vfzTTthppmdzPLHLWdGZ
tdvrvGgGTSScnHcjcg
zLLVfzPPcDZnPjSPpD
LfffNFLNlNbJwrctthWqNdNq
NdjJtfVNZnnFFdtfGfFNcvpbMDbzdcTbbzpvmcDR
PHMSHCHHWrRCvzDzDChT
BqPWSHwllSQWrLHQHPqlBBNfttZMjFQfjGtZtNjJJjnN
CpZtMCMQQpCVWjMDVjPVQsWWqJJhbTcddPlfhTRqchcJblhh
NwDSGNmGRccqNJfT
SBSSmgrrgGHnvSzwGVWDCzMCpLZtMsstLM
sbjHQsBlBQrrGjQjBqCRSnSCpnfngLnFhJngFfSP
zHVctHDcZtdJffnPpcSpFn
ZdwNMztdvzVdrqblvWsqHvBR
jPdjFPSbVDMMbqZzQWzQ
hFRrJlpprGhtlJGQzmCRmZBWQCHRQR
vThNplJpNhltNNlvcGDvwVFgnPwvSgPSSfjS
DhDTPQpTDmQbDQrrrWtWPJNNrrsJ
qqGjgwCgVRjMSRwMMGRGqjwvsNJJBZtrstvNBvHWHJvL
VqqgfjzfgfFGVjRggCGznhlbTpQchcshpdFlnDbn
DpTQTBbCZQVJQZJjrFllGdlvMPlMLqGBGvLl
hmnWHWWNzzmHsmWRlGGpdLgLHGlqvgqg
RzcWRhRnRnfmswfwtzzRWrDTrrFCQTCpQpcCrjjQCp
HLvpHvGcBTDFznvfqT
hCPQbPZPbjSbwwjCPChSClJJfzqTggTFDfsJngDg
StqmmZbdqrQmhQrrhZWcRcGBpBHWVcLctMWp
dNnRNbRdbRJMBMBVVThn
rNrsLNscFsCDjpwTMgBGWMGjJjWBVJ
wNcLpqHNsCprsfLFsHwRvPSSPRZRtRQSqtQPmP
PPhGfbthhBDVsTDtDqRR
mCmSNmqpcqjjrCScWRsZDpHsDQRZQDZDss
CcWzNmccrjjvqBGzzdPGnv
SDRmCSFfcSFFcfDmDBFSCfdVJhpzZjNJTNzRTvjzjhzNjTtZ
ngGsltrMWrblNpNTJJplJN
PGGnGsWngrGLQHHtHHHgWsHSBLqqfLcqBdVdcCDDBFdCDm
VPjGwhwVPhrnqhzJmQvQTQvmzBzw
ZBDBRbLLdtfRLlddLlCLCZMgmFJQFDcvzMQmgMzzJJFJ
LHLWltHlRZCtBVhVVHPjGSpphp
JqhlhdnnmfRVVSpzWLjzVLGpvB
stQtFTTrsZQPFQNNDtQgLzzSLvjvLGLBGSZGGWJv
DDDFFgDPbTwbTTJMCMcbCqqmmRRCnb
JbDWPDPPJJDMDjHPZHGbHGVZTBhrzBpdzszdTTphdNdWdrpv
RmRRqllqffwFtqwLCsqTNvpCsqCNqvdN
fmfLmStlnnfnRtfcnQbbjPjPPggZGVsMQMbb
WJggvGDJSwWgSfgvfSMGqqQHBcPjcHChcQBCssDHCTTQ
mlRnbrnbnltblwdnnpbLRdCCjCTHTjPTTsQcTrHHhCcj
bFLbdmzRpvSwfFFNWN
BHnDnQHnHMWLwzWPzD
dmlZCrdqLZzZVZJM
tRRtdlLCjLmqCRsrSLrvvRQNFQnbgRTQQNHTBbGQQh
ZrQPQWCrJnPdQSNTmBJNTHGHJN
zhFRfswjwhhsFttfsfvQftRtLTzmBTHGTBmzMLHHLmGHNTTS
hQhwqVjQwsdggrZZCWVl
VjfnQgVQjblChfjVJlbzLtrSLlTGtztHTtsTGH
DDqWQDQMWmDwWNwcqdWvpSrtLpLsptMprMStstMz
vQcddRdRvWcwWRmmmmddZmmfVnnngJJbZnCBnBhhFbhCgJ
gVgDnnmJdQVdJJgtgDjBsBhsBSPRSRRSSwccSbSqwPcCPcSC
HrQHlHFpQfTHzzWzwScPPCRfLbPSfCSR
TTQlZNTzlZNMWvrZMlpnhnVtnDDnVNtVJnjmhg
MCmmssFnZJcNNszfpvvrpvJzvwpp
BRRRWQWbSRGGRTTtZHWSqTrvDfgfdfrrwrDgfbvfzfrd
jRBhWRWTSRttQBZMNchNCsmFMchP
GBDncllqcSlNFZWBFWPjHVbw
LQphJlJzLCwPjHbpHZvV
hzCMJLMzTsrdrszQCCCTCQCDlqqnNmggqfGmgdmGgcmSNt
hFVVbqJsqhcnBRTRGBTh
lwdDpmzdNznzZBgGRRjR
HdmvNvSCmDmwNDFrMJMqJFCRfsbq
ctnbTcFTnbwSSfrrMLRhpJLMRdpwdJJR
vdGCVBmGVHPLBRWhpRLJJZ
VmQPHqvsPdlQsVHDftnlFTbffnbttfTF
LBJZHrhLThHddcMLVtcMcL
CPMNFDDMpGqFjjSPDPDqdvmdtQgVQQcQWcQgQQsj
DzFDFMRSFPSGTJJTJBwwRhBw
dpldqlqlRppFTHpbjbnLRLVnnGfjtG
NNJTcmhzvJQNgMJBwcGtjtGbttfhtsGGnhnt
rzcwmgvcvrBNvvmMgvcBzwHPCTWWprqPHqTFWdPCWDTF
BNllDRTNqDNvNDDLBcDvBCLVJrVdJdtrnrCHggtrdd
mppFMFjpMFZQZQGjFCdgrCrCdrvVGtJJCC
PZsQmfPphvPjSsjmPjfZllBwcNRDNcDqNNWbTclS
fjqZBSDSDwwsQwCDND
rrdMdjVWtTTPslsslFLTLCsJ
rvPWbvcmHjmdPbHvrvBHgqRRgqHGgfZGfHRS
ggTQgsgwFrTrggbMTvSdmjfCmmQDcmqjDjmc
nLZnRhNZnnNHZhZVStCcDqjcqmjSjH
RWGNnhzBnJJRRWNRBNZNLZhFMTFPvrTrTlsggPwSlFMWTw
RNmnPRnLGcQmzBQpHHjTltjtlfgspbsq
CZvCJwZMMCCMdFVcwJJsgTTHfsTlbfbgbT
SSVFhWCZdSCcWCcWdrvhzmnnnLNGDRDNzzLNGz
jPwfPwNfFpFNQpDjdMcjcrdddDHD
tzsRsGRLzhLhvqvhHMlqqV
LRBnRBGSnBSGsGSGmGtBJCmnNWZpPpTNPMwQMPNJFZTTNwWT
PCrStRPSPvZQcZPvqvfjSRWFFNFJFLZTTJTTVZFFGLFF
DlpBzBntHDzhlpGJVHLwTMFLVLTL
gptBBdgzpsBbpQvvPQPRqrdcCC
`
const rucksackItemsArray = rucksackItemsRaw.split('\n')
const day3TestArray = function (raw) {
	const rawArray = raw.split('\n')
	rawArray.forEach((e) => {
		// TODO: Remove the item that is ''
	})
}
 day3TestRaw.split('\n')
const matchedItemLetters = []

const letterIterate = function (comp1, comp2) {
	// convert both strings to arrays
	comp1Arr = Array.from(comp1)
	comp2Arr = Array.from(comp2)
	// start counter for compartment 1
	for (let c1 = 0; c1 < comp1Arr.length; c1++) {
		// start counter for compartment 2
		for (let c2 = 0; c2 < comp1Arr.length; c2++) {
			//console.log(c1, comp1Arr[c1], c2, comp2Arr[c2])
			// if the letter matches, return, otherwise increment counter 2
			if (comp1Arr[c1] == comp2Arr[c2]) {
				let matchedLetter = comp1Arr[c1]
				return matchedLetter
				}	
			}
			// when we reset counter 1, reset counter 2 also
			c2 = 0
		}
	}

function ruckCompSlice(ruckArray) {
	ruckArray.forEach((elem) => {
		// get compartment size and strings
		const compartmentSize = elem.length/2
		const compartment1 = elem.slice(0, compartmentSize)
		const compartment2 = elem.slice(compartmentSize)
		// Find matching item between compartment 1 and 2
		let matchedLetter = letterIterate(compartment1, compartment2)
		matchedItemLetters.push(matchedLetter)
	})
	// send to summing function
	const sum = prioritySum(matchedItemLetters)
	return sum
}

function itemPriority(item) {
	let priority = 0
	// for capitals, add 26 priority
	const regexCaps = /[A-Z]/
	// priority test
	if (regexCaps.test(item)) {
		priority = 26
		item = item.toLowerCase()
	} else {
		priority = 0
	}
	switch(item) {
		case 'a':
			priority += 1
			break
		case 'b':
			priority += 2
			break
		case 'c':
			priority += 3
			break
		case 'd':
			priority += 4
			break	
		case 'e':
			priority += 5
			break
		case 'f':
			priority += 6
			break
		case 'g':
			priority += 7
			break
		case 'h':
			priority += 8
			break
		case 'i':
			priority += 9
			break
		case 'j':
			priority += 10
			break
		case 'k':
			priority += 11
			break
		case 'l':
			priority += 12
			break
		case 'm':
			priority += 13
			break
		case 'n':
			priority += 14
			break
		case 'o':
			priority += 15
			break
		case 'p':
			priority += 16
			break
		case 'q':
			priority += 17
			break
		case 'r':
			priority += 18
			break
		case 's':
			priority += 19
			break
		case 't':
			priority += 20
			break
		case 'u':
			priority += 21
			break
		case 'v':
			priority += 22
			break
		case 'w':
			priority += 23
			break
		case 'x':
			priority += 24
			break
		case 'y':
			priority += 25
			break
		case 'z':
			priority += 26
			break	
	}
	return priority
}

function prioritySum(ruckArray) {
	const priorityArray = []
	// convert leters into priorities
	ruckArray.forEach((i) => {
		const priority = itemPriority(i)
		priorityArray.push(priority)
	})
	// add priorities
	const sum = priorityArray.reduce((acc, curr) => acc + curr, 0)
	return sum
}

const day31Solution = ruckCompSlice(rucksackItemsArray)
day31.innerText = day31Solution

// 3-2

// TODO: Day 3-2
//divide arrays into groups of 3

const splitArray = []
function splitRuckItems(array) {
	const trash = array.shift()
	const arrayItemCount = 3
	let arrayLength= array.length
	const tempArray = array.map((e) => {
		for (i = 0; i < arrayLength; i = i + 3) {
			splitArray.push(array.slice(i, i + 3))
		}
		// if (itemCounter < arrayItemCount) {
		// 	splitArray.push(array.slice(currentItem, currentItem + 2))
		// 	itemCounter++
		// }
	})
	console.log(splitArray, arrayLength)
}

const day32Solution = splitRuckItems(day3TestArray)
//find the letter in common with each group (MUST be in all three)
//find priorities of each letter and get sum
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
const day32 = document.getElementById('day3-2')

// 3-1

//Raw data
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
// Split raw data at newline
const rucksackItemsArray = rucksackItemsRaw.split('\n')
const day3TestArray = day3TestRaw.split('\n')

// Matched letters
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

//divide arrays into groups of 3
const splitArray = []
function splitRuckItems(array) {
	let trash = array.shift()
	trash = array.pop()
	const arrayItemCount = 3
	let arrayLength= array.length - 2
	for (i = 0; i < arrayLength; i = i + 3) {
		splitArray.push(array.slice(i, i + 3))
	}
	return splitArray
}

//Find single char that occurs in all 3 arrays
const badgeItems = []
function compareThreeArrays(array) {
	const splitArray = splitRuckItems(array)
	// For each 3 array group
	const arrayTrio = splitArray.forEach((elem) => {
		// convert each string to an array
		const packArr1 = Array.from(elem[0])
		const packArr2 = Array.from(elem[1])
		const packArr3 = Array.from(elem[2])
		// iterate through array 1, find matches in array 2
		for (let c1 = 0; c1 < packArr1.length; c1++) {
			for (let c2 = 0; c2< packArr2.length; c2++){
				if (packArr1[c1] == packArr2[c2]) {
					// for char that match array 1 & 2, iterate through array 3
					for (let c3 = 0; c3 < packArr3.length; c3++) {
						if (packArr1[c1] == packArr3[c3]) {
							// add matched letter to badgeItems array
							badgeItems.push(packArr3[c3])
							c3 = 0
							c2 = 0
							c1++
							return
						} 
					} 
				} 
			} c2 = 0
		}
	})
	// send to prioritySum function to get total 
	const sum = prioritySum(badgeItems)
	return sum
}

const day32Solution = compareThreeArrays(rucksackItemsArray)
day32.innerText = day32Solution

// Day 4

day4TestRaw = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

day4DataRaw = `8-17,16-49
17-38,18-36
17-43,43-43
86-94,7-87
23-97,22-85
8-50,7-50
82-84,1-83
43-95,51-94
7-89,8-90
85-90,21-70
46-69,7-46
93-98,18-99
42-85,53-92
25-65,64-65
13-53,12-53
59-90,60-95
1-79,58-78
99-99,16-96
56-86,86-86
49-50,50-51
79-83,80-83
31-86,8-20
8-85,9-86
34-81,35-35
7-87,8-95
14-50,49-51
2-65,1-1
37-37,35-44
17-72,3-39
6-25,24-26
56-94,37-93
49-76,36-75
26-37,25-53
98-98,10-97
48-87,49-97
31-82,30-90
5-98,4-93
77-97,76-94
96-98,1-97
67-67,68-95
26-51,50-50
43-67,66-67
31-68,30-90
36-64,65-92
2-2,3-11
57-60,22-58
43-55,44-56
8-81,80-84
2-52,2-2
28-83,76-77
20-83,13-82
23-87,22-72
11-92,91-91
52-84,5-51
74-78,67-97
48-66,67-67
86-86,39-87
5-6,7-54
14-15,14-98
48-89,59-74
51-75,52-67
6-35,16-74
65-98,44-96
10-85,84-84
26-96,95-95
21-96,22-22
13-69,12-68
67-67,47-66
64-70,71-71
59-96,16-59
69-69,56-70
12-90,20-97
6-45,5-98
89-89,39-88
2-69,1-3
19-33,27-33
69-97,94-94
2-98,97-99
22-88,22-38
2-80,1-1
64-64,63-63
21-22,21-79
18-88,19-89
44-57,43-56
55-56,3-55
40-76,39-84
71-94,70-94
22-23,22-83
2-12,15-26
37-72,12-45
4-79,3-61
2-33,33-34
33-82,18-32
1-99,2-95
7-79,7-79
62-99,2-99
88-94,18-96
35-38,38-38
26-27,26-56
8-64,2-8
11-11,13-88
69-90,17-44
21-22,22-42
38-38,37-37
16-52,10-15
24-82,24-82
9-85,2-26
28-99,1-97
86-86,25-85
9-66,9-27
73-73,74-90
18-99,19-98
85-93,92-92
23-55,23-97
6-79,80-96
31-62,37-42
42-44,43-49
20-85,73-86
56-96,13-94
2-17,8-16
1-59,5-84
46-55,4-77
65-87,16-87
41-87,41-42
1-94,2-92
24-91,24-24
8-67,6-25
89-99,84-96
23-67,2-24
6-38,1-2
67-92,72-98
3-22,7-80
11-53,5-11
62-62,33-62
30-96,31-96
32-99,31-32
15-15,14-70
2-3,14-75
37-56,38-44
46-82,82-82
58-59,32-58
7-43,6-42
25-26,26-84
6-91,92-94
3-69,2-70
11-80,3-9
56-57,57-82
26-68,25-67
43-47,7-46
39-49,2-38
50-51,32-50
85-85,86-98
8-56,5-57
16-83,17-83
43-93,44-92
65-67,18-66
19-76,19-75
33-55,39-68
43-44,38-43
22-26,21-27
1-4,3-68
50-65,26-64
33-94,98-99
52-99,50-50
26-43,20-42
19-37,37-50
2-99,99-99
4-94,3-93
88-95,3-87
71-98,88-98
11-58,10-11
7-93,5-92
98-98,62-82
22-43,43-44
21-28,25-28
56-56,58-63
9-10,9-85
66-87,66-67
8-79,78-78
25-79,78-80
40-40,40-62
5-98,6-99
3-34,28-99
22-93,21-97
26-42,25-97
39-48,38-42
32-50,32-32
14-91,93-93
8-62,7-89
27-93,26-93
64-66,59-65
7-77,76-78
11-72,63-71
54-81,22-80
3-89,89-89
28-80,81-81
9-91,19-43
17-90,90-90
24-75,76-81
31-52,15-24
38-75,39-76
40-55,42-91
95-95,67-94
12-95,11-95
8-54,54-55
18-29,28-53
41-41,42-76
98-98,13-98
23-99,14-27
45-45,10-46
2-70,81-98
14-88,13-90
21-58,28-66
23-24,23-90
12-70,11-85
15-15,16-75
46-48,26-45
78-86,41-98
84-84,83-84
73-81,54-84
19-65,66-88
74-97,74-98
7-86,6-7
18-27,27-29
91-91,10-90
4-8,7-32
21-42,21-42
19-69,20-99
67-68,17-67
30-79,29-89
2-86,1-2
38-54,40-65
28-48,20-29
1-42,43-43
20-41,16-41
8-14,1-13
19-90,18-20
90-91,4-91
1-89,1-89
81-93,83-94
29-66,29-29
28-50,10-50
2-28,2-84
25-67,24-26
35-53,36-37
9-99,6-9
20-78,23-91
36-61,62-62
15-39,14-31
67-73,15-66
33-99,62-90
42-69,70-70
79-80,80-81
88-88,41-89
2-84,84-84
31-74,32-75
9-87,9-94
61-99,61-89
2-99,3-16
42-57,43-58
23-83,23-94
4-97,96-98
2-99,30-36
32-80,32-81
7-31,8-14
4-65,4-65
7-8,7-41
44-64,64-72
86-95,21-87
96-97,63-96
10-94,11-96
14-82,38-85
9-77,10-78
26-87,2-5
96-96,80-95
45-88,44-89
44-44,45-74
37-91,38-89
68-86,85-85
54-67,66-98
24-73,23-72
89-90,88-89
51-71,1-51
10-25,24-26
85-86,36-88
72-72,55-71
2-4,4-50
68-92,67-91
83-86,82-88
71-71,67-70
95-96,6-96
7-99,2-98
77-82,65-78
57-97,19-47
81-91,82-82
11-17,16-55
95-98,50-54
66-98,65-67
1-94,93-96
9-47,10-48
91-95,13-92
4-64,8-63
26-27,26-96
11-60,6-11
28-28,27-82
49-87,50-76
2-96,1-97
29-73,20-29
72-72,73-82
12-68,67-67
98-99,1-97
12-13,13-78
33-65,66-73
34-62,36-67
63-93,64-92
2-45,8-42
11-99,12-97
11-88,6-89
23-61,58-58
16-96,24-95
2-70,6-69
31-90,90-91
9-25,7-8
23-69,23-24
54-64,53-54
15-22,22-56
3-80,2-40
35-39,34-39
20-45,8-64
19-96,18-99
11-72,1-16
24-73,42-73
23-48,47-89
13-82,14-83
42-64,42-63
6-20,5-17
2-6,3-7
35-96,99-99
33-83,34-83
6-6,57-93
67-81,82-82
13-97,12-84
5-64,5-97
31-91,30-97
76-95,75-77
30-92,91-92
19-86,19-20
11-45,3-46
2-37,19-98
11-20,12-32
28-98,97-98
2-94,2-94
1-99,99-99
28-44,40-49
8-46,7-9
36-95,35-94
14-91,15-91
23-74,24-75
24-45,27-46
39-62,26-38
13-15,14-95
22-84,21-21
2-89,88-99
12-69,68-83
24-92,10-60
4-97,9-94
29-74,34-51
9-9,10-91
97-98,33-96
21-66,67-67
2-95,1-89
34-35,36-57
84-84,13-85
5-49,6-50
47-97,48-75
23-96,24-76
4-59,2-3
4-99,5-92
2-95,1-99
14-72,9-71
40-95,41-75
15-96,97-97
9-50,49-51
55-77,76-78
97-97,7-96
92-93,3-92
40-74,39-84
82-87,4-83
2-81,3-77
18-82,17-80
13-80,81-81
20-81,80-80
9-96,1-6
84-89,88-88
6-77,5-76
37-74,69-76
95-98,3-96
26-87,87-88
2-43,44-44
5-89,58-94
34-75,75-75
88-91,19-83
23-78,28-77
64-75,76-76
32-46,31-46
2-13,12-76
51-96,50-99
91-91,32-90
3-76,66-81
10-94,8-96
88-89,14-89
2-40,91-98
29-84,30-85
13-14,13-79
2-97,98-99
1-52,2-51
75-98,40-93
90-98,19-91
47-49,8-48
20-96,20-21
20-87,21-43
50-87,97-99
1-38,77-84
86-92,85-91
15-15,14-14
19-87,71-88
22-66,65-67
9-96,1-97
12-94,13-76
43-68,69-92
18-60,59-97
3-91,1-1
8-26,7-27
7-99,7-98
22-65,65-87
98-99,8-99
78-93,35-79
3-18,17-76
82-86,81-85
2-5,6-95
38-63,64-86
13-54,6-93
37-90,37-89
21-35,36-94
34-95,33-91
4-37,3-8
1-3,3-82
99-99,40-99
7-8,7-94
49-49,3-50
16-72,71-73
3-6,6-13
11-92,10-10
12-12,11-88
42-75,43-91
99-99,88-97
46-48,7-47
20-91,17-20
75-76,27-75
93-95,34-94
26-63,62-62
45-50,46-59
7-70,8-68
41-42,42-60
50-51,51-86
34-59,58-88
53-94,63-99
4-79,5-91
20-23,14-78
98-99,15-99
15-15,14-53
33-40,63-86
8-91,14-91
94-95,3-94
55-83,74-84
17-18,17-91
4-81,3-3
26-26,27-84
85-87,48-86
32-41,42-42
98-99,42-97
80-87,81-84
93-96,1-94
31-87,33-87
26-27,18-26
40-40,41-89
86-88,25-87
6-14,14-15
32-67,31-68
45-45,44-90
96-96,5-95
61-76,62-75
46-78,45-96
4-92,3-93
48-56,61-70
83-85,82-98
89-89,73-90
2-56,20-28
45-55,45-54
12-87,87-87
2-91,1-94
91-92,32-92
2-85,1-84
98-98,51-97
90-91,81-91
15-90,17-37
3-97,1-3
7-74,8-77
46-75,45-45
82-83,24-83
17-25,24-80
11-96,11-12
32-81,31-69
21-96,21-22
76-98,76-77
42-88,48-82
60-61,18-61
7-73,74-79
24-99,25-80
85-85,2-84
92-92,93-93
59-59,60-99
95-96,9-94
23-92,19-91
11-94,93-97
14-91,90-95
46-77,77-77
46-47,47-53
3-47,2-3
12-47,48-65
4-44,4-5
26-33,32-77
31-81,81-81
3-48,48-49
4-7,7-93
34-80,80-80
50-77,51-78
28-43,75-82
36-89,51-60
10-87,86-87
1-99,1-99
2-89,49-99
23-36,37-37
8-13,13-62
22-24,23-68
18-18,18-93
32-49,33-51
73-91,74-92
10-59,44-58
2-59,2-59
3-89,89-90
15-94,5-95
42-88,88-88
7-95,7-7
1-75,1-75
12-12,12-86
93-94,2-93
80-89,80-89
14-91,95-95
38-98,38-97
96-99,11-97
69-70,50-70
13-81,80-82
25-89,26-81
47-48,32-47
4-19,3-27
34-64,33-33
10-90,2-11
5-98,4-99
6-90,89-91
41-52,41-53
48-87,49-77
2-53,5-74
82-99,66-84
59-60,11-59
22-57,21-56
38-81,81-81
51-81,3-51
25-73,26-36
98-98,3-99
96-96,1-95
50-72,49-49
91-91,2-90
61-96,60-61
10-45,11-15
65-66,49-66
82-87,45-83
59-59,3-59
5-72,4-73
56-95,55-56
13-83,14-96
52-59,52-59
44-46,42-45
11-93,11-35
74-92,16-81
98-99,17-99
20-99,1-93
37-86,46-51
15-16,16-98
1-97,96-99
73-75,23-74
94-99,24-95
94-99,26-95
39-39,40-80
58-89,57-59
84-93,19-93
7-43,43-98
23-82,21-23
2-59,1-98
93-93,12-73
9-99,9-39
42-61,53-81
12-79,11-69
33-62,34-80
11-99,8-10
44-89,43-82
7-71,70-71
11-99,98-99
87-91,92-97
2-93,3-94
58-79,64-80
24-62,24-25
3-86,3-3
4-90,2-2
3-90,4-91
9-87,9-87
23-57,22-57
4-13,14-87
11-23,24-24
35-68,7-46
3-3,4-80
6-47,36-71
21-93,92-97
6-65,5-86
21-22,8-21
22-55,56-78
51-85,84-84
17-95,94-98
32-61,32-60
63-63,63-63
48-65,56-66
3-33,4-32
7-76,71-79
34-66,37-82
21-65,25-66
3-79,4-80
17-88,95-99
26-26,27-92
81-95,3-80
56-97,3-55
58-86,23-86
84-84,21-84
82-84,29-82
26-80,79-79
40-41,39-52
27-85,26-86
39-39,6-39
29-89,28-28
11-42,11-12
1-66,67-67
15-83,82-83
50-93,51-92
78-80,83-96
6-96,7-94
10-11,10-45
18-40,12-19
31-55,7-32
18-19,29-83
29-29,30-80
35-37,36-99
94-94,28-94
48-98,49-99
63-66,60-62
4-62,62-62
77-84,85-85
34-34,35-47
68-90,20-69
6-68,39-88
8-99,7-99
49-50,17-49
74-85,73-85
88-94,27-87
4-89,88-88
8-84,7-83
60-64,60-64
94-94,95-99
43-91,41-99
92-92,91-91
67-67,19-66
19-99,18-96
47-79,78-79
8-48,22-38
35-59,32-35
5-45,6-46
20-90,19-89
14-55,12-13
34-34,34-43
3-96,4-99
39-40,40-65
83-83,25-82
15-92,14-91
12-12,13-82
43-57,43-57
3-98,99-99
30-66,65-67
92-95,86-92
48-52,13-42
1-7,10-64
60-98,44-59
64-86,65-85
29-97,96-96
49-85,2-50
35-38,33-37
6-8,7-63
1-90,90-91
7-56,8-74
2-61,2-3
79-93,41-96
6-47,5-6
10-87,11-42
93-99,35-94
13-62,21-62
11-49,10-10
2-55,54-54
59-68,3-27
1-96,1-96
38-75,39-76
29-51,51-92
6-61,7-60
24-25,25-90
27-32,28-31
16-47,1-46
20-88,7-18
24-74,25-25
40-86,41-90
8-97,3-97
95-95,1-94
11-36,12-79
8-98,3-99
28-28,29-30
20-86,21-85
42-58,61-88
43-58,52-69
67-92,32-75
81-97,44-89
19-90,89-90
12-92,11-13
27-89,28-89
16-97,17-98
91-93,27-90
15-95,14-95
84-84,10-83
35-35,34-87
14-65,15-78
25-90,91-95
19-21,20-93
12-92,11-95
48-60,47-61
11-92,10-93
6-68,67-69
19-57,20-20
33-45,23-46
6-6,11-99
2-96,2-3
11-21,7-12
9-48,47-48
19-57,2-19
15-96,14-44
78-82,12-79
21-76,5-7
8-31,24-59
52-99,52-53
9-90,89-89
1-3,3-89
18-92,15-93
15-35,16-99
1-7,6-83
7-86,61-85
19-89,19-89
57-98,56-97
22-22,12-23
1-1,1-20
21-23,22-94
44-46,45-47
10-90,4-11
30-84,29-83
55-73,55-73
62-73,14-63
59-81,47-58
27-64,28-28
33-79,55-84
14-50,13-50
77-98,76-95
23-69,24-70
80-82,1-81
27-92,17-28
4-49,50-71
42-85,41-98
97-99,15-98
21-59,20-58
64-98,99-99
90-90,62-91
58-69,70-94
90-96,10-90
95-96,65-96
4-55,3-62
19-71,70-83
1-2,2-2
13-99,12-14
98-99,43-98
3-35,36-36
26-88,27-54
1-99,2-98
11-11,9-10
94-99,19-93
16-85,66-86
53-65,53-65
42-63,63-71
87-87,57-87
35-60,34-60
31-84,38-55
7-76,8-77
1-78,2-2
78-93,52-79
83-96,83-96
82-84,83-85
1-25,1-19
97-97,19-98
78-78,24-77
7-81,6-6
18-84,81-88
46-89,47-90
20-93,61-93
11-51,2-52
94-94,56-94
8-99,98-99
1-2,3-51
6-96,95-97
9-10,9-66
98-98,69-97
64-64,65-78
38-98,97-97
46-52,40-50
74-78,1-75
2-56,5-55
48-54,47-53
35-67,68-98
8-68,68-83
95-97,35-94
13-69,14-91
42-71,71-72
24-40,23-39
65-98,64-89
4-95,5-86
53-84,84-84
29-98,30-99
4-98,3-5
96-96,1-95
50-84,85-85
41-78,25-78
4-84,84-85
15-47,1-45
86-89,50-93
41-82,15-94
18-32,33-35
27-93,26-27
2-90,89-92
52-55,51-77
34-43,33-42
3-3,3-99
93-97,33-94
74-99,5-75
27-99,24-99
27-28,6-27
1-2,1-57
19-82,19-83
37-73,36-72
29-53,5-53
21-94,94-94
8-57,57-91
58-59,57-58
3-3,2-3
43-80,12-27
81-99,82-91
48-49,14-49
13-98,12-95
14-98,13-79
67-98,97-99
31-84,32-32
1-91,91-94
2-2,3-96
1-99,1-1
22-93,22-90
1-92,1-2
28-88,1-1
16-94,15-16
36-70,69-70
14-85,84-86
21-54,15-98
39-61,39-60
54-56,9-55
9-45,45-46
14-19,14-20
2-53,53-53
58-69,68-68
76-98,77-99
21-73,22-49
9-96,8-95
1-50,1-49
28-67,29-98
41-78,40-79
95-99,46-96
9-88,8-10
19-73,7-74
29-65,29-66
98-99,23-97
44-44,43-47
9-60,61-61
39-64,38-65
56-81,55-56
74-75,74-90
72-95,10-66
3-86,2-2
16-26,25-26
13-61,6-51
4-17,39-46
39-97,40-76
36-52,37-51
41-96,40-40
23-70,69-71
10-90,10-87
29-81,30-76
89-89,89-89
11-96,12-97
11-80,55-80
4-94,93-97
11-94,10-93
78-78,22-77
53-98,53-98
6-53,33-63
13-14,13-30
94-96,22-93
22-96,95-95
40-40,41-78
66-66,4-66
40-91,50-76
61-91,87-88
2-50,3-49
98-98,1-99
10-28,14-31
44-95,51-54
31-59,30-31
10-94,9-92
40-47,39-40
3-88,4-89
64-86,7-86
33-37,32-35
10-11,10-60
95-95,3-94
16-84,16-99
96-97,20-96
25-91,91-92
3-3,4-95
15-91,20-91
59-90,16-60
5-53,52-54
3-99,4-4
23-43,24-44
26-91,53-91
4-73,4-5
64-64,2-64
74-74,51-75
35-51,34-34
72-87,86-88
3-92,2-2
55-87,56-56
69-81,70-82
42-78,17-42
51-58,54-58
76-93,94-96
4-88,3-88
53-60,54-64
2-75,3-15
13-56,55-72
3-26,9-9
17-55,18-54
39-75,40-55
12-31,13-52
91-97,46-91
35-56,35-72
46-46,47-47
10-10,11-47
19-54,18-82
1-97,2-97
13-46,13-46
6-95,94-95
16-33,16-33
26-26,26-99
42-83,78-79
5-17,4-67`

const day41Data = day4DataRaw.split('\n')
//console.log(day41Data)
// Separators for assignment array
const comma = ','
const dash = '-'

const day41Solution = function(array) {
	let containmentCounter = 0
	array.forEach((e) => {
		const elfAssignments = splitAssignmentStrings(e)
		if (elfAssignments[0] <= elfAssignments[2] && elfAssignments[1] >= elfAssignments[3]) {
			containmentCounter++
		} else if (elfAssignments[2] <= elfAssignments[0] && elfAssignments[3] >= elfAssignments[1]) {
			containmentCounter++
		}
	})
	return containmentCounter
}

function splitAssignmentStrings(e) {
	//Get location of comma and dashes
	const commaLocation = e.indexOf(comma)
	const firstDash = e.indexOf(dash)
	const lastDash = e.lastIndexOf(dash)	
	//Get start and end for both elves
	const elf1Start = parseInt(e.substring(0, firstDash)) 
	const elf1End = parseInt(e.substring(firstDash + 1, commaLocation))
	const elf2Start = parseInt(e.substring(commaLocation + 1, lastDash))
	const elf2End = parseInt(e.substring(lastDash + 1))
	const elfAssignments = new Array(elf1Start, elf1End, elf2Start, elf2End)
	return elfAssignments
}

// Output Day 4-1
const day41 = document.getElementById('day4-1')
day41.innerText = day41Solution(day41Data)

// Day 4-2

const day42Solution = function(array) {
	let overlapCounter = 0
	array.forEach((e) => {
		const elfAssignments = splitAssignmentStrings(e)
		if (elfAssignments[0] >= elfAssignments[2] && elfAssignments[0] <= elfAssignments[3]) {
			overlapCounter++
		} else if (elfAssignments[2] >= elfAssignments[0] && elfAssignments[2] <= elfAssignments[1]) {
			overlapCounter++
		}
	})
	return overlapCounter
}
// Output Day 4-2
const day42 = document.getElementById('day4-2')
day42.innerText = day42Solution(day41Data)

// Day 5

// Arrays for each column
let boxPositions = []
let arrayCols 
let counter = 0

// Raw and real data
const day5TestRaw = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
`
const day5DataRaw = `        [G]         [D]     [Q]    
[P]     [T]         [L] [M] [Z]    
[Z] [Z] [C]         [Z] [G] [W]    
[M] [B] [F]         [P] [C] [H] [N]
[T] [S] [R]     [H] [W] [R] [L] [W]
[R] [T] [Q] [Z] [R] [S] [Z] [F] [P]
[C] [N] [H] [R] [N] [H] [D] [J] [Q]
[N] [D] [M] [G] [Z] [F] [W] [S] [S]
 1   2   3   4   5   6   7   8   9 

move 7 from 6 to 8
move 5 from 2 to 6
move 2 from 4 to 1
move 1 from 4 to 5
move 5 from 7 to 6
move 7 from 6 to 3
move 5 from 9 to 2
move 6 from 2 to 3
move 2 from 7 to 9
move 20 from 3 to 1
move 11 from 1 to 6
move 1 from 9 to 8
move 3 from 8 to 2
move 8 from 1 to 5
move 10 from 8 to 4
move 7 from 6 to 4
move 1 from 8 to 3
move 8 from 1 to 7
move 16 from 4 to 8
move 1 from 9 to 8
move 1 from 5 to 2
move 4 from 7 to 4
move 5 from 6 to 7
move 1 from 6 to 1
move 8 from 7 to 4
move 1 from 6 to 9
move 12 from 4 to 5
move 3 from 2 to 5
move 1 from 6 to 2
move 1 from 3 to 7
move 1 from 3 to 2
move 1 from 9 to 3
move 1 from 7 to 8
move 1 from 7 to 5
move 1 from 3 to 2
move 4 from 5 to 7
move 5 from 5 to 7
move 1 from 4 to 3
move 1 from 3 to 9
move 3 from 1 to 8
move 1 from 9 to 1
move 2 from 2 to 1
move 2 from 2 to 7
move 8 from 8 to 1
move 3 from 5 to 2
move 8 from 7 to 5
move 7 from 1 to 3
move 3 from 1 to 7
move 1 from 1 to 5
move 1 from 3 to 7
move 7 from 5 to 8
move 2 from 2 to 8
move 1 from 3 to 2
move 1 from 2 to 4
move 1 from 4 to 8
move 13 from 8 to 1
move 13 from 5 to 9
move 2 from 5 to 2
move 7 from 9 to 3
move 12 from 8 to 3
move 4 from 9 to 3
move 1 from 3 to 4
move 2 from 2 to 3
move 1 from 1 to 6
move 1 from 2 to 3
move 1 from 5 to 9
move 7 from 7 to 4
move 10 from 1 to 8
move 1 from 1 to 4
move 1 from 9 to 5
move 2 from 5 to 1
move 1 from 6 to 5
move 3 from 8 to 9
move 5 from 4 to 3
move 4 from 4 to 1
move 7 from 1 to 6
move 2 from 5 to 7
move 35 from 3 to 4
move 4 from 9 to 1
move 19 from 4 to 8
move 1 from 7 to 6
move 1 from 9 to 2
move 10 from 4 to 5
move 2 from 4 to 7
move 3 from 4 to 3
move 1 from 2 to 8
move 1 from 1 to 9
move 3 from 3 to 6
move 4 from 8 to 6
move 4 from 5 to 2
move 2 from 8 to 3
move 3 from 5 to 9
move 12 from 6 to 1
move 8 from 8 to 6
move 2 from 9 to 1
move 1 from 4 to 1
move 1 from 3 to 8
move 3 from 7 to 8
move 2 from 9 to 7
move 1 from 6 to 7
move 10 from 6 to 8
move 4 from 2 to 5
move 1 from 3 to 7
move 7 from 5 to 7
move 13 from 8 to 1
move 29 from 1 to 4
move 8 from 7 to 8
move 1 from 1 to 3
move 3 from 7 to 6
move 1 from 1 to 9
move 15 from 4 to 1
move 1 from 3 to 6
move 10 from 1 to 6
move 10 from 6 to 7
move 1 from 4 to 9
move 1 from 9 to 1
move 1 from 9 to 7
move 6 from 7 to 8
move 1 from 1 to 6
move 5 from 6 to 5
move 21 from 8 to 9
move 5 from 1 to 9
move 2 from 9 to 5
move 3 from 5 to 6
move 3 from 7 to 9
move 4 from 4 to 6
move 6 from 8 to 7
move 6 from 6 to 3
move 2 from 7 to 9
move 1 from 7 to 2
move 6 from 3 to 2
move 1 from 6 to 4
move 4 from 5 to 9
move 1 from 4 to 5
move 9 from 4 to 6
move 7 from 6 to 4
move 10 from 9 to 2
move 5 from 7 to 5
move 10 from 2 to 7
move 2 from 5 to 4
move 2 from 5 to 9
move 4 from 9 to 4
move 1 from 8 to 6
move 7 from 7 to 2
move 1 from 5 to 4
move 2 from 7 to 1
move 1 from 5 to 7
move 3 from 6 to 2
move 4 from 4 to 5
move 1 from 2 to 7
move 10 from 4 to 7
move 3 from 7 to 3
move 17 from 9 to 4
move 1 from 1 to 4
move 1 from 1 to 5
move 5 from 2 to 7
move 1 from 9 to 2
move 5 from 4 to 8
move 2 from 9 to 7
move 4 from 8 to 1
move 3 from 4 to 8
move 1 from 2 to 5
move 1 from 9 to 2
move 6 from 4 to 8
move 3 from 7 to 5
move 1 from 4 to 9
move 1 from 9 to 1
move 3 from 1 to 9
move 4 from 8 to 5
move 2 from 9 to 8
move 4 from 2 to 5
move 8 from 7 to 2
move 5 from 8 to 5
move 2 from 7 to 8
move 1 from 3 to 5
move 1 from 1 to 2
move 1 from 1 to 6
move 2 from 3 to 6
move 5 from 2 to 8
move 4 from 7 to 1
move 7 from 8 to 5
move 1 from 1 to 5
move 3 from 8 to 3
move 1 from 9 to 3
move 7 from 2 to 3
move 2 from 2 to 8
move 2 from 4 to 8
move 1 from 8 to 5
move 1 from 1 to 4
move 2 from 4 to 7
move 2 from 7 to 1
move 3 from 2 to 3
move 3 from 5 to 2
move 1 from 8 to 3
move 3 from 3 to 2
move 5 from 2 to 1
move 17 from 5 to 8
move 9 from 8 to 1
move 11 from 3 to 5
move 8 from 8 to 5
move 2 from 8 to 5
move 16 from 1 to 4
move 13 from 4 to 7
move 6 from 5 to 2
move 2 from 4 to 8
move 5 from 7 to 9
move 2 from 1 to 2
move 7 from 7 to 1
move 1 from 1 to 4
move 1 from 9 to 8
move 7 from 2 to 8
move 1 from 4 to 7
move 2 from 9 to 4
move 1 from 4 to 1
move 1 from 3 to 5
move 2 from 9 to 8
move 11 from 8 to 7
move 2 from 6 to 5
move 1 from 6 to 9
move 1 from 1 to 9
move 1 from 9 to 1
move 4 from 1 to 4
move 2 from 1 to 8
move 1 from 1 to 2
move 1 from 9 to 5
move 2 from 4 to 3
move 2 from 2 to 7
move 2 from 3 to 9
move 1 from 9 to 1
move 1 from 9 to 1
move 5 from 5 to 1
move 19 from 5 to 6
move 5 from 1 to 4
move 1 from 2 to 9
move 1 from 1 to 3
move 7 from 5 to 8
move 1 from 3 to 6
move 8 from 7 to 3
move 7 from 4 to 8
move 3 from 8 to 5
move 1 from 4 to 1
move 1 from 9 to 4
move 1 from 4 to 9
move 1 from 5 to 2
move 2 from 5 to 6
move 2 from 8 to 2
move 7 from 8 to 1
move 1 from 1 to 7
move 3 from 6 to 9
move 2 from 3 to 2
move 1 from 2 to 1
move 1 from 8 to 7
move 2 from 9 to 6
move 2 from 9 to 5
move 1 from 5 to 6
move 1 from 2 to 8
move 2 from 1 to 7
move 1 from 4 to 3
move 3 from 2 to 5
move 7 from 1 to 3
move 10 from 3 to 4
move 3 from 5 to 4
move 1 from 3 to 8
move 3 from 3 to 2
move 1 from 8 to 1
move 1 from 1 to 3
move 3 from 8 to 3
move 5 from 4 to 6
move 1 from 2 to 3
move 4 from 6 to 4
move 1 from 5 to 7
move 4 from 3 to 4
move 1 from 2 to 8
move 12 from 7 to 6
move 1 from 8 to 2
move 2 from 2 to 7
move 1 from 8 to 4
move 23 from 6 to 3
move 14 from 3 to 6
move 15 from 4 to 6
move 1 from 8 to 6
move 10 from 3 to 7
move 2 from 4 to 2
move 11 from 7 to 8
move 2 from 2 to 6
move 44 from 6 to 9
move 21 from 9 to 3
move 12 from 3 to 6
move 1 from 7 to 4
move 1 from 4 to 7
move 9 from 3 to 2
move 2 from 8 to 6
move 3 from 2 to 4
move 17 from 9 to 1
move 3 from 4 to 6
move 2 from 2 to 9
move 4 from 9 to 2
move 10 from 6 to 9
move 1 from 7 to 6
move 4 from 9 to 5
move 4 from 2 to 4
move 14 from 1 to 5
move 4 from 4 to 3
move 3 from 2 to 9
move 9 from 9 to 7
move 1 from 2 to 5
move 9 from 8 to 5
move 8 from 7 to 2
move 4 from 3 to 8
move 5 from 6 to 2
move 3 from 1 to 6
move 1 from 7 to 1
move 4 from 2 to 4
move 3 from 6 to 4
move 3 from 8 to 3
move 13 from 5 to 2
move 2 from 3 to 5
move 12 from 5 to 9
move 1 from 3 to 5
move 1 from 5 to 9
move 1 from 8 to 3
move 4 from 9 to 5
move 6 from 4 to 5
move 12 from 9 to 7
move 1 from 9 to 3
move 1 from 3 to 2
move 12 from 5 to 6
move 12 from 7 to 2
move 1 from 3 to 7
move 1 from 4 to 8
move 33 from 2 to 8
move 1 from 7 to 5
move 1 from 1 to 2
move 4 from 5 to 4
move 3 from 2 to 5
move 34 from 8 to 6
move 1 from 4 to 3
move 1 from 5 to 7
move 1 from 7 to 5
move 3 from 4 to 9
move 2 from 9 to 7
move 1 from 9 to 4
move 1 from 3 to 7
move 1 from 5 to 8
move 1 from 5 to 1
move 1 from 5 to 7
move 1 from 4 to 8
move 1 from 1 to 4
move 1 from 4 to 2
move 3 from 7 to 5
move 2 from 8 to 5
move 1 from 2 to 8
move 4 from 6 to 2
move 1 from 8 to 6
move 1 from 7 to 9
move 29 from 6 to 7
move 4 from 2 to 3
move 2 from 5 to 8
move 1 from 9 to 5
move 2 from 8 to 1
move 23 from 7 to 5
move 2 from 6 to 1
move 23 from 5 to 6
move 1 from 3 to 6
move 4 from 5 to 9
move 2 from 1 to 3
move 5 from 3 to 8
move 2 from 6 to 5
move 2 from 1 to 4
move 1 from 9 to 8
move 1 from 9 to 1
move 1 from 4 to 6
move 2 from 5 to 6
move 6 from 7 to 8
move 2 from 9 to 2
move 18 from 6 to 5
move 21 from 6 to 4
move 1 from 1 to 6
move 2 from 6 to 7
move 2 from 7 to 9
move 2 from 2 to 8
move 7 from 4 to 3
move 12 from 5 to 3
move 1 from 9 to 5
move 1 from 9 to 4
move 6 from 5 to 2
move 17 from 3 to 4
move 3 from 4 to 3
move 1 from 2 to 4
move 5 from 2 to 8
move 1 from 5 to 8
move 19 from 8 to 7
move 1 from 3 to 6
move 1 from 8 to 4
move 1 from 6 to 1
move 15 from 4 to 6
move 1 from 1 to 4
move 3 from 3 to 5
move 4 from 6 to 7
move 1 from 4 to 7
move 10 from 6 to 7
move 16 from 4 to 5
move 24 from 7 to 2
move 8 from 7 to 8
move 1 from 4 to 2
move 6 from 8 to 7
move 1 from 8 to 7
move 1 from 6 to 9
move 14 from 5 to 4
move 9 from 7 to 8
move 4 from 5 to 1
move 2 from 1 to 5
move 3 from 8 to 6
move 2 from 6 to 9
move 2 from 2 to 8
move 6 from 2 to 7
move 3 from 4 to 6
move 1 from 3 to 4
move 3 from 5 to 7
move 1 from 6 to 9
move 5 from 7 to 2
move 4 from 9 to 1
move 1 from 7 to 9
move 9 from 8 to 4
move 5 from 1 to 2
move 2 from 6 to 1
move 6 from 4 to 7
move 1 from 7 to 3
move 1 from 3 to 9
move 1 from 9 to 7
move 1 from 6 to 7
move 9 from 4 to 5
move 7 from 7 to 9
move 3 from 7 to 5
move 1 from 9 to 2
move 6 from 9 to 8
move 4 from 4 to 5
move 1 from 4 to 2
move 1 from 4 to 2
move 2 from 1 to 2
move 1 from 9 to 8
move 10 from 2 to 4
move 8 from 2 to 7
move 12 from 2 to 9
move 6 from 7 to 4
move 1 from 1 to 2
move 8 from 9 to 8
move 7 from 5 to 1
move 9 from 4 to 3
move 14 from 8 to 4
move 1 from 8 to 4
move 1 from 1 to 5
move 1 from 5 to 2
move 3 from 2 to 4
move 1 from 7 to 1
move 1 from 7 to 3
move 2 from 1 to 7
move 3 from 5 to 7
move 2 from 7 to 6
move 1 from 6 to 5
move 3 from 7 to 1
move 1 from 6 to 8
move 1 from 8 to 7
move 1 from 3 to 6
move 1 from 7 to 1
move 4 from 1 to 4
move 6 from 3 to 2
move 3 from 1 to 2
move 3 from 3 to 6
move 3 from 2 to 6
move 6 from 6 to 5
move 1 from 1 to 4
move 1 from 9 to 6
move 5 from 2 to 1
move 3 from 1 to 2
move 2 from 9 to 8
move 3 from 1 to 5
move 1 from 9 to 7
move 25 from 4 to 1
move 1 from 1 to 7
move 2 from 8 to 3
move 13 from 1 to 9
move 2 from 3 to 5
move 8 from 5 to 9
move 4 from 2 to 1
move 2 from 6 to 7
move 10 from 5 to 9
move 4 from 7 to 2
move 2 from 2 to 3
move 9 from 9 to 2
move 4 from 4 to 5
move 4 from 5 to 4
move 5 from 1 to 4
move 10 from 4 to 5
move 22 from 9 to 1
move 2 from 2 to 7
move 3 from 2 to 1
move 6 from 2 to 6
move 1 from 7 to 1
move 10 from 5 to 7
move 15 from 1 to 4
move 13 from 1 to 5
move 3 from 6 to 8
move 1 from 8 to 9`
// Split raw data into crate and instructions


//const day51Solution = day5DataParser(day5TestRaw)
const day52Solution = day52DataParser(day5TestRaw)
// Test for Box
function isBox(string) {
	const boxRegex = /\[\w\]/
	return boxRegex.test(string)
}

function isEmptyBox(string) {
	const emptyBoxRegex = /\[\]/
	return emptyBoxRegex.test(string)
}

// Test for empty string
function isEmptyString(string) {
	const spaceRegex = /^$/
	return spaceRegex.test(string)
}

// Test for whitespace
function is4WhiteSpaces(string) {
	const whiteSpaces = /\s{4}/
	return whiteSpaces.test(string)
}

// Test for single number
function isNumber(string) {
	const numberRegex = /\d/
	return numberRegex.test(string)
}

// Get the number of columns
function findNumberOfColumns(row) {
	return (row.indexOf('\n') + 1) / 4
}

// Create an array inside boxPositions for each column
function boxPositionArrays(num) {
	for (i = 0; i < num; i++){
		boxPositions[i] = []
	}
}

// Separate boxes from whitespaces
function boxSorter(string) {
	for (i = 0; i < string.length; i = i +4) {
		let start = i
		let end = i + 4
		if (isBox(string.substring(start,end))) {
			columnCounter(string.substring(start,end))
		} else if (is4WhiteSpaces(string.substring(start,end))) {
			columnCounter(string.substring(start,end))
		} else {
			return
		}
	}
}

// Send boxes (or whitespace) to appropriate array
function columnCounter(item) {
	if (!is4WhiteSpaces(item)) {
		 item = item.trim()
	}
	// Push valid box into boxPositions
	if (counter < arrayCols && !is4WhiteSpaces(item)) {
		boxPositions[counter].push(item)
		counter ++
	// If it's blank, don't push
	} else if (counter < arrayCols && is4WhiteSpaces(item)) {
		counter ++
	// Reset the counter when you exceed the number of columns
	} else {
		counter = 0
		boxPositions[counter].push(item)
		counter ++
	}
}

// Split moves into an array - one move per array item
function day5MoveParser(string) {
	const moveArray = string.split('\n')
	splitStringsForMoves(moveArray)
}
function day52MoveParser(string) {
	const moveArray = string.split('\n')
	splitStringsForMoves52(moveArray)
}

function splitStringsForMoves(string) {
	string.forEach((move) => {
		// Turn each line into an array
		let lineArray = move.split(' ')
		let cratesToMove = Number.parseInt(lineArray[1])
		let fromArray = Number.parseInt(lineArray[3])
		let toArray = Number.parseInt(lineArray[5])
		// Send to move function here
		day51BoxMover(cratesToMove, fromArray, toArray)
		//day52BoxMover(cratesToMove, fromArray, toArray, boxPositions52)
	})
}
function splitStringsForMoves52(string) {
	string.forEach((move) => {
		// Turn each line into an array
		let lineArray = move.split(' ')
		let cratesToMove = Number.parseInt(lineArray[1])
		let fromArray = Number.parseInt(lineArray[3])
		let toArray = Number.parseInt(lineArray[5])
		// Send to move function here
		day52BoxMover(cratesToMove, fromArray, toArray)
		//day52BoxMover(cratesToMove, fromArray, toArray, boxPositions52)
	})
}

function day51BoxMover(cratesToMove, fromArray, toArray) {
	while (cratesToMove > 0) {
		let movedBox = 	boxPositions[fromArray - 1].shift()
		boxPositions[toArray - 1].unshift(movedBox)
		cratesToMove --
	}
}

function day52BoxMover(cratesToMove, fromArray, toArray) {
	let movedBoxes = boxPositions[fromArray - 1].splice(0, cratesToMove)
	boxPositions[toArray-1].unshift(movedBoxes)
}

function returnTopCrates(array) {
	let solutionArray = []
	array.forEach((column) => {
		solutionArray.push(column[0])
	})
	console.log(solutionArray)
	return solutionArray
}

// Day 5-1 solution
// function day5DataParser(string) {
// 	const day5Split = day5DataRaw.split('\n\n')
// 	const day5Data = day5Split[0]
// 	const day5Moves = day5Split[1]
// 	// Get the number of columns of boxes
// 	arrayCols = findNumberOfColumns(day5Data)
// 	// Create an array for each column of boxes
// 	boxPositionArrays(arrayCols)
// 	// Sort each box (or empty string) into the boxPositionArray
// 	boxSorter(day5Data)
// 	// Parse the move string
// 	day5MoveParser(day5Moves)
// 	day51solutionArray = returnTopCrates(boxPositions)
// }

// Day 5-2 solution
function day52DataParser(string) {
	const day5Split = day5TestRaw.split('\n\n')
	const day5Data = day5Split[0]
	const day5Moves = day5Split[1]
	arrayCols = findNumberOfColumns(day5Data)
	boxPositionArrays(arrayCols)
	boxSorter(day5Data)
	day52MoveParser(day5Moves)
	day52solutionArray = returnTopCrates(boxPositions)
}

// Output Day 5-1
const day51 = document.getElementById('day5-1')
//day51.innerText = day51solutionArray

// Output Day 5-2
const day52 = document.getElementById('day5-2')

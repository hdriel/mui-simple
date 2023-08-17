import React from 'react';
import Typography from '../../_FIXED/Typography/Typography';
import { StepType } from '../../decs';
import { Box } from '@mui/material';
import { Edit as EditIcon, DoneAll as DoneAllIcon } from '@mui/icons-material';

export const stepsStr: string[] = ['Meaning', 'Goals', 'Mindset', 'Work hard'];
// https://www.thedailyshifts.com/blog/4-simple-steps-to-success-in-2021
export const stepsStrChildren = [
    <Box>
        <Typography bold>
            Define “what does success mean to you?” Success means a lot of different things to different people.
            Everyone has a different definition of success. So, one of the first crucial steps to success is to ask,
            “What does success mean to you?” We suggest that you grab a journal and ask yourself the following
            questions:
        </Typography>
        , What is my passion in life? What is my purpose in life? How would I feel if I were successful? What would
        success look like in my personal life? What would success look like in my professional life? What does success
        mean to me? By answering all of these questions, you will have a better idea of the bigger picture when it comes
        to success. Oftentimes, success will be directly linked to your passion and purpose in life. While to some
        people success equals dollars, to others, success is more about “true wealth” and being wealthy in intangible
        things. Once you have asked yourself “What does success mean to you?” then you will be able to move forward with
        the next steps to success.
    </Box>,
    <Box>
        <Typography bold>Set actionable and emotional goals</Typography>, What is my passion in life? What is my purpose
        For better or for worse, success typically doesn’t happen overnight. It requires hard work and dedication. But
        even before you put in that hard work, you need to do some planning. Therefore, one of the most important steps
        to success is goal setting. If you don’t set goals, you won’t know exactly what you’re reaching for. If the goal
        is just “success,” this is way too broad. You want to narrow in and set actionable, emotional goals. This will
        put you on the right path for success in the specific area that you want success in. There are 4 steps of goal
        setting when you use our method.
        <ul>
            <li>
                Step 1: Instead of focusing on something you want to accomplish, focus on the identity you want to
                incorporate.
            </li>
            <li>Step 2: Give yourself a target date. </li>
            <li>Step 3: How are you going to do it? </li>
            <li>Step 4: What is the emotion you want to feel? </li>
        </ul>
        So, let’s say your idea of success is becoming a published author who changes people’s lives. Here is how you
        can set an emotional goal using our method. “I am a writer who publishes a book on January 1. I write for 30
        minutes daily. At my book release, I feel empowered as I share my writing gifts with the world.” By following
        this method, you give yourself guidelines for how you are going to accomplish the goal and you give yourself
        motivation for how you will feel when you accomplish this goal. You can apply this method to any and every goal
        you have relating to your success. In order to keep yourself on track, you might want to use a planner, habit
        tracker, or vision board. Use whatever works to keep yourself motivated and inspired.
    </Box>,
    <Box>
        <Typography bold>Develop and maintain a success mindset</Typography>, What is my passion in life? What is my Now
        that you have asked, “What does success mean to you?” and set some goals, it’s time to develop and maintain a
        success mindset. Having a success mindset means having a positive but realistic outlook when it comes to your
        success, and it is one of the most important steps to success.
        <Typography> Here are some key aspects of having a success mindset:</Typography>
        <ul>
            <li>Being flexible and willing to adapt</li>
            <li>Having backup plans and solutions when problems arise</li>
            <li>Not letting anything get in the way of reaching your goals</li>
            <li>Believing that you are worthy and capable of success</li>
            <li>Having faith in yourself</li>
            <li>Having the drive and dedication to work hard to meet goals</li>
        </ul>
        Success is highly correlated with mindset. Think about it: if you are constantly down on yourself, feeling
        worthless, and not willing to work, you aren’t very likely to succeed, right? But if you are constantly lifting
        yourself up, feeling confident, and always willing to work, you are much more likely to experience success. If
        you struggle with feeling confident, we suggest using positive affirmations for success. You should repeat
        success affirmations out loud every day in front of a mirror. You can also leave Post-it notes around the house
        with the affirmations, or set reminders on your phone. Some of our favorite positive affirmations for success
        are:
        <ul>
            <li>I am brimming with ambition</li>
            <li>I am capable of doing hard things</li>
            <li>I am worthy of success</li>
            <li>I am able to achieve a work-life balance</li>
            <li>I have the power to reach my goals</li>
            <li>I am able to exceed under pressure</li>
            <li>I am intelligent</li>
            <li>I am focused</li>
        </ul>
    </Box>,
    <Box>
        <Typography bold>Work hard and don’t give up</Typography>
        Last but not least of the four steps to success is to put in the work. Dreams don’t come true unless you make
        them come true. Goals are not accomplished if you do not work hard. If you truly want to be successful, it’s
        going to take time. You need to constantly work towards your goals. If you need help, ask for it. If you need to
        adjust your path, go ahead and adjust. The most important thing is to keep going. If you really want success,
        giving up is not an option. We hope you’re feeling inspired to go out there and follow these steps to success in
        order to accomplish your dreams! If you want to learn even more, check out our free e-book that will provide you
        with five simple secrets of the super successful. Additionally, if you need some help finding your purpose in
        life on your path to success, check out our course.
    </Box>,
];

export const stepsChildren = [
    <Typography>
        Step number one, decide exactly what it is you want in each part of your life. Become a “meaningful specific”
        rather than a “wandering generality.”
    </Typography>,
    <Typography>
        Second, write it down, clearly and in detail. Always think on paper. A goal that is not in writing is not a goal
        at all. It is merely a wish and it has no energy behind it.
    </Typography>,
    <Typography>
        Third, set a deadline for your goal. A deadline acts as a “forcing system” in your subconscious mind. It
        motivates you to do the things necessary to make your goal come true. If it is a big enough goal, set
        sub-deadlines as well. Don’t leave this to chance.
    </Typography>,
    <Typography>
        Fourth, make a list of everything that you can think of that you are going to have to do to achieve your goal.
        When you think of new tasks and activities, write them on your list until your list is complete.
    </Typography>,
    <Typography>
        The sixth step is for you to take action on your plan. Do something. Do anything. But get busy. Get going.
    </Typography>,
];

export const steps: StepType[] = [
    {
        label: 'Decide What You Want',
        color: 'primary',
        icon: 'AltRoute',
    },
    {
        label: 'Write it Down',
        icon: <EditIcon />,
        optional: true,
    },
    {
        label: 'Set a Deadline',
        color: 'success.dark',
        icon: 'HourglassBottom',
    },
    {
        label: 'Make a List',
        color: '#0c7376',
        icon: 'PlaylistAddCheck',
    },
    {
        label: 'Take Action',
        error: true,
        icon: 'ThumbUpOffAlt',
    },
];

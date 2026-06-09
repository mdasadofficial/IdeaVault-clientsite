"use client";

import {
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox,
  Button,
} from "@heroui/react";
// import React, { useTransition } from "react";

const AddIdeaPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const ideaData = Object.fromEntries(formData.entries());
    // console.log("Submitting Idea:", ideaData);

    const res = await fetch("http://localhost:8000/idea", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(ideaData),
    });

    const data = await res.json();
    // Toast
  };

  return (
    <div className="max-w-4xl mx-auto my-10 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
      {/* Header section inside the form container */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 text-white text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-black">
          Share Your Innovation
        </h1>
        <p className="text-indigo-100 text-sm mt-1">
          Submit your startup concept to get validated by a global community of
          builders.
        </p>
      </div>

      <form onSubmit={onSubmit} className="p-6 md:p-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Idea Title */}
          <div className="md:col-span-2">
            <TextField name="ideaTitle" isRequired>
              <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Idea Title
              </Label>
              <Input
                placeholder="e.g., EcoDrop: Smart Water Management"
                className="rounded-2xl mt-1.5"
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>
          </div>

          {/* Category Dropdown (Tech, Health, AI, Education, etc.) */}
          <div>
            <Select
              name="category"
              isRequired
              className="w-full"
              placeholder="Select platform category"
            >
              <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Category
              </Label>
              <Select.Trigger className="rounded-2xl mt-1.5">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="Tech" textValue="Tech">
                    Tech <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="AI" textValue="AI">
                    Artificial Intelligence <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Health" textValue="Health">
                    Health-Tech <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Education" textValue="Education">
                    EdTech <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Finance" textValue="Finance">
                    FinTech <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Estimated Budget (Optional) */}
          <TextField name="estimatedBudget" type="text">
            <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Estimated Budget (Optional)
            </Label>
            <Input placeholder="e.g., $15,000" className="rounded-2xl mt-1.5" />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Image URL */}
          <div className="md:col-span-2">
            <TextField name="imageUrl" isRequired>
              <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Concept Banner Image URL
              </Label>
              <Input
                type="url"
                placeholder="https://images.unsplash.com/.../mockup.jpg"
                className="rounded-2xl mt-1.5"
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>
          </div>

          {/* Tags (Optional) */}
          <div className="md:col-span-2">
            <TextField name="tags">
              <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Tags (Optional)
              </Label>
              <Input
                placeholder="e.g., iot, green-energy, saas (comma separated)"
                className="rounded-2xl mt-1.5"
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>
          </div>

          {/* Target Audience */}
          <div className="md:col-span-2">
            <TextField name="targetAudience" isRequired>
              <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Target Audience
              </Label>
              <Input
                placeholder="e.g., Urban Homeowners, Property Managers"
                className="rounded-2xl mt-1.5"
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>
          </div>

          {/* Short Description */}
          <div className="md:col-span-2">
            <TextField name="shortDescription" isRequired>
              <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Short Description
              </Label>
              <Input
                placeholder="Give a brief 1-line elevator pitch..."
                className="rounded-2xl mt-1.5"
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>
          </div>

          {/* Problem Statement */}
          <div className="md:col-span-2">
            <TextField name="problemStatement" isRequired>
              <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Problem Statement
              </Label>
              <TextArea
                placeholder="What critical issue does your target audience face?"
                className="rounded-2xl mt-1.5 min-h-[100px]"
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>
          </div>

          {/* Proposed Solution */}
          <div className="md:col-span-2">
            <TextField name="proposedSolution" isRequired>
              <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Proposed Solution
              </Label>
              <TextArea
                placeholder="How exactly does your concept dynamically resolve this problem?"
                className="rounded-2xl mt-1.5 min-h-[100px]"
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>
          </div>

          {/* Detailed Description */}
          <div className="md:col-span-2">
            <TextField name="detailedDescription" isRequired>
              <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Detailed Description
              </Label>
              <TextArea
                placeholder="Deep dive into features, architecture, and deployment roadmaps..."
                className="rounded-3xl mt-1.5 min-h-[150px]"
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>
          </div>
        </div>

        {/* Action Button: Uniform Premium Styling */}
        <div className="pt-4">
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.01] active:scale-95 transition-all duration-200 text-base"
          >
            Submit Idea
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddIdeaPage;

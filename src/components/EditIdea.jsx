"use client";

import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";

export function EditIdea({ idea }) {
  const {
    _id,
    ideaTitle,
    imageUrl,
    estimatedBudget,
    category,
    shortDescription,
    detailedDescription,
    problemStatement,
    proposedSolution,
    targetAudience,
    tags,
  } = idea || {};

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const ideaData = Object.fromEntries(formData.entries());
    // console.log("Submitting Idea:", ideaData);

    const res = await fetch(`http://localhost:8000/idea/${_id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(ideaData),
    });

    const data = await res.json();

    // console.log(data);
    // Toast
  };

  return (
    <Modal>
      <Button
        className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 font-semibold shadow-lg transition-all duration-300 rounded-xl"
        startContent={<BiEdit className="text-lg" />}
      >
        <BiEdit />
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className=" max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Idea</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="p-6 md:p-10 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Idea Title */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={ideaTitle}
                        name="ideaTitle"
                        isRequired
                      >
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
                        defaultValue={category}
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
                    <TextField
                      defaultValue={estimatedBudget}
                      name="estimatedBudget"
                      type="text"
                    >
                      <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Estimated Budget (Optional)
                      </Label>
                      <Input
                        placeholder="e.g., $15,000"
                        className="rounded-2xl mt-1.5"
                      />
                      <FieldError className="text-xs text-red-500 mt-1" />
                    </TextField>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                      >
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
                      <TextField defaultValue={tags} name="tags">
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
                      <TextField
                        defaultValue={targetAudience}
                        name="targetAudience"
                        isRequired
                      >
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
                      <TextField
                        defaultValue={shortDescription}
                        name="shortDescription"
                        isRequired
                      >
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
                      <TextField
                        defaultValue={problemStatement}
                        name="problemStatement"
                        isRequired
                      >
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
                      <TextField
                        defaultValue={proposedSolution}
                        name="proposedSolution"
                        isRequired
                      >
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
                      <TextField
                        defaultValue={detailedDescription}
                        name="detailedDescription"
                        isRequired
                      >
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
                    <Modal.Footer>
                     
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.01] active:scale-95 transition-all duration-200 text-base"
                      >
                        Save Idea
                      </Button>
                    </Modal.Footer>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
